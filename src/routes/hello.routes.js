import {Router} from 'express'
import os from 'os';

const router = Router()

router.get('/', (req, res)=>{
    const hostname = os.hostname();
    res.send(`Containers ID : ${hostname}`)
})

export default router