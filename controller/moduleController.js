const { read, write } = require('../db/db.config')

const SQL_CHECK_MODULE = `SELECT * FROM module where id = ?`
const SQL_ADD_module = `Insert into module set ? `
const SQL_update_module = `update  module set ? where id = ? `

const getmodule = async (req, res) => {
    try{
      let [data] =   await read.query("SELECT id ,name FROM module")  
      res.status(200).send({data})
    }
    catch(err){
        res.status(500).send({ status: "fail", msg: "Something went wrong" })
    }
}

const add = async(req ,res)=>{
  try{
    const [data]= await write.query(SQL_CHECK_MODULE, [req.body.id]);
    if(data.length > 0){
      res.status(200).send({ status: "success", msg: "Module with name already exists"})
    }else{
     
      await write.query(`create table if not exists modules.${req.body.id}(id int not null auto_increment primary key, name varchar(255), icon varchar(255), bannerImage varchar(255) ,moduleLayout varchar(255), moduleCss varchar(255) ,created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,is_deleted tinyint(1) DEFAULT 0 )`)
      await write.query(SQL_ADD_module ,  req.body)
      res.status(200).send("add Data")
    }
  }catch(err){
    console.error(err);
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}

const update = async(req ,res)=>{
  try{
    await write.query(SQL_update_module ,  [req.body , req.query.id])
    res.status(200).send("update Data")

  }catch(err){
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }}

  const deleteData = async(req ,res)=>{
    try{
      await write.query(SQL_update_module ,  [req.body , req.query.id])
      res.status(200).send("delete Data")
  
    }catch(err){
      res.status(500).send({ status: "fail", msg: "Something went wrong" })
  
    }
  }

  const getData = async(req ,res)=>{
    try{
      res.status(200).send("get Data")
  
    }catch(err){
      res.status(500).send({ status: "fail", msg: "Something went wrong" })
  
    }
  }








module.exports = {
    getmodule
    ,add,update , deleteData , getData
}