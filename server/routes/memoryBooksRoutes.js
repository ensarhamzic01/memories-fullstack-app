const express = require("express");
const Router = express.Router({ mergeParams: true });
const checkAuth = require("../middleware/check-auth");
const memoryBooksController = require("../controllers/memoryBooksController");

Router.get("/", checkAuth, memoryBooksController.getMemoryBooks);
Router.get("/shared", checkAuth, memoryBooksController.getSharedMemoryBooks);
Router.post("/", checkAuth, memoryBooksController.newMemoryBook);
Router.post(
  "/:memoryBookId/viewers",
  checkAuth,
  memoryBooksController.addNewViewer
);
Router.delete(
  "/:memoryBookId/viewers/:viewerId",
  checkAuth,
  memoryBooksController.removeViewer
);

module.exports = Router;
