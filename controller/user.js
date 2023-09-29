const sql = require('mysql');

const dp = sql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

exports.controle = (req,res)=>{
    dp.getConnection((err,connection)=>{
    if(err)throw err;
    connection.query('select * from emply',async(err,row)=>{
        connection.release();
        if(!err){
            console.log('good');
            console.log(row)
            res.render('home',{row})
        }else{
            console.log('err will be listing'+err)
        }
    });
})

}
exports.store= (req,res)=>{
    res.render('adduser')
}

exports.data = (req,res)=>{
    dp.getConnection((err,connection)=>{
        if(err)throw err;
        const{name,age,number} = req.body;
        // console.log(name)
        // console.log(age)
        // console.log(number)
        connection.query('insert into emply (name,age,number) values (?,?,?)',[name,age,number],async(err,row)=>{
            connection.release();
            if(!err){
                console.log('the value is added');
                res.render('adduser',{msg:'the value is added'})
            }else{
                console.log('err will be listing'+err)
            }
        });
    })
}
exports.edit= (req,res)=>{
    dp.getConnection((err,connection)=>{
        if(err)throw err;
    
        // console.log(name)
        // console.log(age)
        // console.log(number)
        connection.query('select id from emply',[id],async(err,row)=>{
            connection.release();
            if(!err){
                console.log('the value is added');
                res.render('edit',{msg:'the value is added'})
            }else{
                console.log('err will be listing'+err)
            }
        });
    })
}

