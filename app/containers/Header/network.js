
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'HTTP://127.0.0.1:7545', tx_explorer: null },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/v3/1833f975e6a14588bbbce0a91d46078a', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/v3/1833f975e6a14588bbbce0a91d46078a', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
