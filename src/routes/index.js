const express = require('express')
const router = express.Router()


router.get('', async(req, res)=>{
    try {
        res.status(200).json({
            message: 'Welcome to Biashara Core APT'
        })
    } catch (error) {
        res.status(500).json{
            error,
        }
    }
})


module.exports = router;
