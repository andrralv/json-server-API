module.exports = {
  networks: {
    development: {
      network_id: "*",
      host: "localhost",
      port: 8545,
      gas: 500000,
      gasPrice: 1000 // Specified in Wei
    }
  }
};
