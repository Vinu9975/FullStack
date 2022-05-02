const express = require("express");
const router = express.Router();

const {add,send,update,getTicket,deleteTicket} =require("../controllers/Ticket.js")

router.post("/addTicket", add);
router.get("/get",send);
router.put("/:id",update);
router.get("/:id",getTicket);
router.put("/del/:id",deleteTicket)


module.exports = router;