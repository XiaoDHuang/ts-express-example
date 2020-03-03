import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// let queryAllSQL = ``

router.get('/getEmployee', (req, res) => {
    res.json({
       flag: 1,
       message: 'NO DB'
    })
});

router.post('/createEmployee', urlencodedParser, async (req, res) => {
    res.json({
        flag: 2,
        message: 'NO DB'
    })
});

router.post('/deleteEmployee', async (req, res) =>{
    res.json({
        flag: 3,
        message: 'NO DB'
    })
});

router.post('/updateEmployee', async (req, res) => {
    res.json({
        flag: 4,
        message: 'NO DB'
    })
})


export default router;