const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./router/user');

app.use(cors());
// 只能解析x-www格式数据
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.cc = (err, status=1)=>{
        res.send({
            status,
            message:err instanceof Error ? err.message : err,
        })
    }
    next();
})
app.use('/api',userRouter);

app.listen(8080,()=>{
    console.log('app running on port 8080');
});