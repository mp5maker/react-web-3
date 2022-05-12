require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropset: {
      url: "https://eth-ropsten.alchemyapi.io/v2/PoKux1qausnNvPJ-HCSvW53P_w0micta",
      accounts: [
        "1ad136c69abf9a6f8b1f0660ebf41c2c8cd5ba7e8f39195dad33c76862a0a11a",
      ],
    },
  },
};
