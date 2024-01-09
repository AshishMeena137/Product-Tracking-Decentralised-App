# Introduction to Product Tracking Dapp:
Welcome to our Product Tracking Decentralised Application (Dapp), a revolutionary solution designed to streamline the end-to-end lifecycle of products on the blockchain. Our Dapp leverages the power of decentralised technology to bring transparency, traceability, and efficiency to the entire product supply chain.
## Key Features:
### User Registration:
The Dapp provides a seamless registration process for manufacturers, sellers, and consumers, ensuring a secure and user-friendly environment.
### Manufacturer Operations:
Manufacturers can register on the platform and easily add new products by providing detailed information about each item. This includes essential details such as product name, description, manufacturing date, and associated fees.
### Seller Transactions:
Sellers can view the products listed by manufacturers and make purchases by paying the specified product fees. The smart contract ensures secure and transparent transactions between manufacturers and sellers.
### Consumer Purchases:
Consumers can browse products listed by sellers and purchase them by paying the original fees plus a 10% increment. This increment contributes to a fair and sustainable marketplace while encouraging transparency in pricing.
### Blockchain Technology:
Our Dapp is built on blockchain technology, offering an immutable and transparent ledger for recording all product-related transactions. This ensures trust and traceability throughout the supply chain.
## Advantages:
### Transparency:
Every transaction, from product creation to consumer purchase, is recorded on the blockchain, providing an immutable history of the product's journey.
### Traceability:
Users can trace the origin and history of each product, fostering accountability and ensuring that consumers receive authentic and reliable information.
### Efficiency:
By utilising smart contracts and decentralised technology, our Dapp reduces the complexity and time associated with traditional supply chain processes.
## How to Get Started:
### Registration:
Manufacturers, sellers, and consumers can start by registering on the platform. Each user type undergoes a simple and secure registration process.
### Product Management:
Manufacturers can log in and manage their product portfolio, adding new products and maintaining a clear overview of their offerings.
### Transactions:
Sellers can browse and purchase products from manufacturers, while consumers can make secure purchases from sellers, contributing to a transparent and reliable marketplace.
### Blockchain Integration:
The entire product tracking process is powered by blockchain, ensuring data integrity and security throughout the supply chain.
Join us in revolutionising the product tracking landscape with our decentralised application, fostering trust, transparency, and efficiency in the world of commerce. Explore the future of product tracking today!
# Prerequisite: Understanding Key Technologies
## React.js
### Overview
React.js is a JavaScript library used for building user interfaces. It is essential to have a fundamental understanding of React concepts, such as components, state, and props.
Learning Resources
React Documentation
React Tutorial
## Solidity
### Overview
Solidity is a programming language for writing smart contracts on the Ethereum blockchain. A basic understanding of blockchain concepts, smart contracts, and Ethereum is crucial.
Learning Resources
Solidity Documentation
CryptoZombies
## Web3.js
### Overview
Web3.js is a JavaScript library for interacting with Ethereum. Familiarity with concepts like Ethereum nodes, transactions, and smart contract interaction is necessary.
Learning Resources
Web3.js Documentation
Ethereum Developer Documentation
## Truffle
### Overview
Truffle is a development environment for Ethereum. Understanding the Ethereum development lifecycle, smart contract deployment, and testing are essential.
Learning Resources
Truffle Documentation
Truffle Boxes
## General Blockchain Knowledge
### Overview
Having a broad understanding of blockchain technology, decentralised applications, and the Ethereum ecosystem is crucial for successful development.
Learning Resources
Blockchain Basics
Ethereum Whitepaper
## Practical Experience
### Overview
Apply theoretical knowledge through hands-on projects, exercises, and real-world examples. Practice is key to mastering these technologies.
Learning Resources
GitHub repositories with example projects
Participate in online coding challenges and hackathons
Acquiring knowledge in these areas will empower you to build decentralised applications using React.js, Solidity, Web3.js, and Truffle effectively. It is recommended to explore the provided learning resources, practice regularly, and engage with the community to enhance your skills.

# Project Setup Documentation
### Product Tracking DApp - Local Setup Guide
This guide will help you set up the local development environment for the Product Tracking DApp project. The project is based on React.js, Solidity, Web3.js, and Truffle.
Prerequisites
Make sure you have the following prerequisites installed on your system:
```
Node.js (v14.x or later)
npm (Node Package Manager)
Ganache (for local blockchain development)
```
Steps
Clone the Repository:

```
git clone https://github.com/AshishMeena137/Product-Tracking-Decentralised-App.git

cd Product-Tracking-Decentralised-App

Install Dependencies:
Navigate to the client folder and install the project dependencies.


cd Client
npm install
```

Start Ganache:
Start Ganache to run a local blockchain. Create a new workspace and configure the network to match the Truffle configuration.
Configure Truffle:
Outside the client directory, configure Truffle to connect to your local Ganache blockchain.

```
truffle-config.js
```

Ensure the configuration matches your Ganache settings.
Compile and Migrate Contracts:
Compile and migrate the smart contracts to the local blockchain.

```
truffle compile
truffle migrate
```
Start the React App:
Back in the client directory, start the React app.

```
Npm run dev
```

This will launch the app on http://localhost:5173/ by default.
Interact with the DApp:
Open your web browser and go to http://localhost:5173/. You should see the Product Tracking DApp interface. You can now register as a manufacturer, seller, or consumer and perform various actions within the application.
# Troubleshooting
### Dependencies: 
Ensure that all dependencies are installed correctly by checking the node_modules directory in the client folder.
### Network Configuration:
Double-check your Ganache settings and Truffle configuration to make sure they match.
### Ganache:
Make sure Ganache is running on the expected port, and a workspace is created with the correct network ID.
By following these steps, you should have the Product Tracking DApp running locally on your machine. For any issues or further assistance, refer to the project documentation or reach out to the project maintainers.

#### Read full code explanation documentation https://docs.google.com/document/d/15FBMsbb7u_dRCzSpgDux67JSifS7WR8Q91YyAWS76Zs/edit?usp=sharing
