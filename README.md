 Crypto Tracker App

A full-stack crypto tracking web app that fetches and displays live cryptocurrency data using a scheduled backend cron job.

---

Live Links

- Frontend URL: [https://crypto-fawn-three.vercel.app](https://crypto-fawn-three.vercel.app)  
- Backend API Base URL:[https://crypto-backend-lac-ten.vercel.app](https://crypto-backend-lac-ten.vercel.app/api/crypto/current)  
 
- **GitHub Repositories:**  
  - [Frontend Repo](https://github.com/Shubham-sharma12345/crypto)  
  - [Backend Repo](https://github.com/Shubham-sharma12345/crypto-backend)  

---

 Tech Stack

### Frontend
- React.js
- JavaScript
- Axios
- Tailwind CSS *(optional)*
- Vercel *(for deployment)*

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- CoinGecko API *(for live crypto data)*
- node-cron *(for scheduled tasks)*
- Vercel *(for deployment)*

---

 Setup Instructions

 Clone the Repositories

git clone https://github.com/Shubham-sharma12345/crypto-tracker-frontend
Setup Frontend
```bash
cd crypto-tracker-frontend
npm install
npm start
```
<br>

Setup Backend
git clone https://github.com/Shubham-sharma12345/crypto-tracker-backend
```bash
cd crypto-tracker-backend
npm install
```
<br>
Create a .env file and add your MongoDB URI:
```bash
.env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
```
<img width="1893" height="853" alt="image" src="https://github.com/user-attachments/assets/ad24cb45-3d60-46b5-af41-f43e1afd579b" />

<img width="1915" height="962" alt="image" src="https://github.com/user-attachments/assets/b93bdf3b-0ba4-4c6d-8df4-7c252c233988" />

 



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
