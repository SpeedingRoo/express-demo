// router处理函数写在这里面
const db = require('../db/index');

exports.regUser = (req,res)=>{

    // 获取客户端提交的用户信息
    const userInfo = req.body;
    if(!userInfo.username || !userInfo.password){
        res.send({
            status: 401,
            message:'username or password must not be empty'
        })
    }

    const queryStr = 'SELECT * FROM ev_users WHERE username=?';
    db.query(queryStr, [userInfo.username],(err,results)=>{
        if(err){
            return res.send({
                status: 1,
                message: err.message,
            })
        }
        if(results.length>0){
            return res.send({
                status: 1,
                message: 'Username exists, try some other names'
            })
        }

    })
    console.log(userInfo);

}

exports.login = (req,res)=>{
    res.send('login successful');
}