const config = require("../config")
const Web3 = require("web3");

/**
 * Gas Data Collector
 *
 * @author Yepeng Ding
 */
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
