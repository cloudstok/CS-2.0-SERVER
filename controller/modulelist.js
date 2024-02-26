const { read, write } = require('../db/db.config')

const SQL_ADD_module = `Insert into ? set ? `
const SQL_update_module = `update  ? set ? where id = ? `



const addModuleList = async (req, res) => {
  try {
  let tableName = req.body.id
  delete req.body.id
    await write.query(`create table if not exists submodules.${(req.body.name).replaceAll(' ' , "_")}(id int not null auto_increment primary key, name varchar(255), icon varchar(255), role enum("S", "M") default "s" , bannerImage varchar(255) ,moduleLayout varchar(255), moduleCss varchar(255) ,created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,is_deleted tinyint(1) DEFAULT 0 )`)
    await write.query(`Insert into modules.${tableName} set ? `, req.body)
    res.status(200).send({status :true , msg : "module created successfully"})
  }
  catch (err) {
    console.error(err);
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}





const updatemoduleList = async (req, res) => {
  try {
    let tableName = req.body.id
  delete req.body.id
    await write.query( `update modules.${tableName}  set ? where id = ? `, [req.body, req.query.id])
    res.status(200).send("update Data")

  } catch (err) {
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}

const deletemoduleList = async (req, res) => {
  try {
    let tableName = req.body.id
    delete req.body.id
    await write.query(`DELETE FROM modules.${tableName} WHERE id = ?`, [ req.query.id])
    res.status(200).send("delete Data")

  } catch (err) {
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}

const getmoduleList = async (req, res) => {
  try {
    
    const [data] = await read.query(`select * from modules.${req.params.m_id}`)
    console.log(req.params)
    res.status(200).send({status : true , data})

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "fail", msg: "Something went wrong" })

  }
}









module.exports = {
  
addModuleList, updatemoduleList, deletemoduleList, getmoduleList
}