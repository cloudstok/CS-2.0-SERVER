const { read, write } = require('../db/db.config')
const data =  require('../module/customer')
const SQL_ALL_submodule = `select * from submodule where is_deleted = 0`;
const SQL_ADD_submodule = `Insert into submodule ? `
const SQL_update_submodule = `update  submodule set ? where id = ? `

const add = async(req ,res)=>{
  try{
    await write.query(SQL_ADD_submodule ,  [req.body])
    res.status(200).send("add Data")

  }catch(err){
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}
const update = async(req ,res)=>{
  try{
    await write.query(SQL_update_submodule ,  [req.body , req.query.id])
    res.status(200).send("update Data")

  }catch(err){
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }}

  const deleteData = async(req ,res)=>{
    try{
      await write.query(SQL_update_submodule ,  [req.body , req.query.id])
      res.status(200).send("delete Data")
  
    }catch(err){
      res.status(500).send({ status: "fail", msg: "Something went wrong" })
  
    }
  }

  const getSubmoduledataData = async(req ,res)=>{
    try{
      let tableName = req.params.s_id
      // let [data] = await read.query(`SELECT * FROM submodules.${tableName} `)  
      let [data] = await read.query(`SELECT * FROM submodules.vishal `)  

          res.status(200).send({ status : true , data})
  
    }catch(err){
      res.status(500).send({ status: "fail", msg: "Something went wrong" })
  
    }
  }









module.exports = {
    add,update , deleteData , getSubmoduledataData
}