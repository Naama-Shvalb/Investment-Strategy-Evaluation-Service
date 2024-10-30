const fs = require("fs");
const path = require("path");
const executionResults = require("../data/executionResults.json");
const stocksData = require("../data/stocksHistoricalData.json");
const RangesExecutor = require("../services/rangesExecutor.js");
const {
  runUserStrategyService,
} = require("../services/runUserStrategyService.js");
const Strategy = require("../services/strategy.js");

module.exports.runUserStrategyController = {
  async runUserStrategy(req, res) {
    try {
      const { userInput } = req.body;

      if (!userInput) {
        return res.status(400).json({ message: "User input is required" });
      }

      await runUserStrategyService.getChatGptResponse(userInput);

      let userStrategyString = await runUserStrategyService.readGptResponse();
      eval(userStrategyString);

      res.status(200).json({ message: "Strategy executed successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
