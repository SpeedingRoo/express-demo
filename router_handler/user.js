// router处理函数写在这里面
const { DOUBLE } = require('mysql/lib/protocol/constants/types');
const db = require('../db/index');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const validator = require('express-joi-validation');

//注册一个新用户
exports.regUser = (req, res) => {

    // 获取客户端提交的用户信息
    const userInfo = req.body;
    console.log(userInfo.username, userInfo.password);
    if (!userInfo.username || !userInfo.password) {
        return res.send({
            status: 1,
            message: 'Username and Password must be entered'
        })
    }
    else {
        const select_query = 'SELECT * FROM users WHERE username=?';

        db.query(select_query,[userInfo.username],(err,results)=>{
            if(err){
                return res.cc(err)
            }

            if(results.length>0){
                return res.cc('username exists, try another name')
            }

            userInfo.password = bcrypt.hashSync(userInfo.password,10);
            console.log(userInfo);

            insert_query = 'INSERT INTO users set ?'
            db.query(insert_query,{username:userInfo.username,password:userInfo.password},(err,results)=>{
                if(err){
                    return res.cc(err)
                }
                if(results.affectedRows!==1){
                    res.cc('registation failed')
                }
                res.cc('successfully created new user',200)
            });
            
        })

    }
}

exports.login = (req, res) => {
    res.send('login successful');
}