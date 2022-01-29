const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./router/user');

app.use(cors());
// 只能解析x-www格式数据
app.use(express.urlencoded({extended:false}));
app.use('/api',userRouter);

app.listen(8080,()=>{
    console.log('app running on port 8080');
});