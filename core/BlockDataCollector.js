const config = require("../config")
const Web3 = require("web3");

/**
 * Block Data Collector
 *
 * @author Yepeng Ding
 */
class BlockDataCollector {

    constructor() {
        // Initialize web3
        this.web3 = new Web3(config.NETWORK_ENDPOINTS);
    }

    async fetchCurrentBlockNumber() {
        return {
            timestamp: Date.now(),
            blockNumber: await this.web3.eth.getBlockNumber()
        }
    }

}

module.exports = BlockDataCollector
