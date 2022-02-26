var Logger = require("../models/logger.model");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    var logger = await Logger.find();
    res.status(200).json({data: logger, status: 200, message: "Success"});
  } catch (error) {
    return res.status(500).json({message: error, status:500});
  }
});

router.post("/", async (req, res) => {
  try {
    var newLogger = new Logger({
      logTitle: req.body.logTitle,
      logDescription: req.body.logDescription,
      logContent: req.body.logContent,
      img: req.body.img,
      logUser: req.body.logUser,
      logLevel: req.body.logLevel,
    });
    const savedLogger = newLogger.save();
    res.status(201).json({data: savedLogger, status: 201, message: "Success"});
  } catch (error) {
    return res.status(500).json({message: error, status:500});
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Logger.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({data: updated, status: 200, message: "Success"});
} catch (error) {
     res.status(500).json({message: error, status:500});
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Logger.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: deleted, status: 200, message: "Success" });
  } catch (error) {
    return res.status(500).json({message: error, status:500});
  }
});

module.exports = router;