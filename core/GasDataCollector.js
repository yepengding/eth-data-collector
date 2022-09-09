var config = require("../config")
var Web3 = require("web3");

class GasDataCollector {

    constructor() {
        // Initialize web3
        this.web3 = new Web3(config.NETWORK_ENDPOINTS);
    }

    async fetchGasPrice() {
        return {
            timestamp: Date.now(),
            price: await this.web3.eth.getGasPrice()
        }
    }

}

module.exports = GasDataCollector
