# ERC-20 Token Faucet on Sepolia Testnet

A complete Ethereum-based faucet system for minting and distributing a custom ERC-20 token on the Sepolia testnet. This project includes a Solidity smart contract, Hardhat deployment, a Node.js backend faucet API, and a frontend UI for requesting tokens via MetaMask.

---

## 🚀 Live Demo

**Frontend Hosted on GitHub Pages:**  
🔗 https://github.com/CharanKairoju/erc20-faucet

---

## 🔧 Tech Stack

- **Solidity (ERC-20 Token Contract)**
- **Hardhat** – Development environment for Ethereum
- **Node.js + Express** – Faucet backend
- **HTML/CSS/JavaScript** – Frontend interface
- **MetaMask** – Wallet integration
- **Sepolia Testnet** – Ethereum test network

---

## 🧪 Features

- Mintable and Burnable ERC-20 Token
- Token faucet with 1-click MetaMask interaction
- Faucet backend with rate-limiting logic (to be added)
- Deployable frontend on GitHub Pages

---

## 📂 Project Structure

erc20-faucet/
│
├── contracts/ # Solidity contracts
│ └── MyToken.sol
│
├── scripts/ # Hardhat deploy scripts
│ └── deploy.js
│
├── frontend/ # Faucet frontend (host this)
│ └── index.html
│
├── backend/ # Node.js Express backend
│ └── server.js
│
├── .env.example # Environment variables template
├── hardhat.config.js
└── README.md


## 📥 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/erc20-faucet.git
cd erc20-faucet
==========================================================================
### 2. Install Dependencies

'''bash
Copy
Edit
npm install
==========================================================================
### 3. Setup Environment Variables

Create a .env file and add your private key + Sepolia RPC URL:

env
Copy
Edit
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_project_id
⚠️ Never share your private key publicly.
=========================================================================
🧾 Deployment Steps
Deploy ERC-20 Token
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network sepolia
Copy the contract address printed in the terminal.
=========================================================================
💧 Run the Faucet Backend
bash
Copy
Edit
cd backend
node server.js
This starts a local API at http://localhost:3000.
========================================================================
🌐 Host Frontend on GitHub Pages
Add to package.json:

json
Copy
Edit
"homepage": "https://<your-username>.github.io/erc20-faucet",
"scripts": {
  "deploy": "gh-pages -d frontend"
}
Run:

bash
Copy
Edit
npm install gh-pages --save-dev
npm run deploy
Enable GitHub Pages under repo settings (branch: gh-pages).
