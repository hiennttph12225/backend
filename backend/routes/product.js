import express from 'express';
const router = express.Router();
router.get('/product',(req,res)=>{
    res.send("đây là trang home")
})
module.exports = router;