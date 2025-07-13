import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crypto/current');
        setCryptos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Initial fetch

    // Set interval to fetch data every 30 minutes
    const intervalId = setInterval(fetchData, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Filter cryptos based on search term
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-6 uppercase tracking-wide">Crypto Tracker</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full max-w-md p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700 text-cyan-300 uppercase text-sm">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Price (₹)</th>
              <th className="py-3 px-4 text-left">24h Change (%)</th>
              <th className="py-3 px-4 text-left">Market Cap</th>
              <th className="py-3 px-4 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptos.map((crypto) => (
              <tr key={crypto.id} className="border-b border-gray-600 hover:bg-gray-700 transition-colors">
                <td className="py-3 px-4">{crypto.name}</td>
                <td className="py-3 px-4">
                  ${crypto.current_price.toLocaleString('en-IN')}
                </td>
                <td className={`py-3 px-4 ${crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="py-3 px-4">
                  ${crypto.market_cap .toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-4">
                  {new Date(crypto.last_updated).toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;