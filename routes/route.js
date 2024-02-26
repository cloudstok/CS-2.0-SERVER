const { getmodule, add, update, deleteData, getData } = require("../controller/moduleController");
const {read , write} = require('../db/db.config')
const route = require("express").Router();
const submodule = require('../controller/submoduleController');
const { getmoduleList, addModuleList, updatemoduleList, deletemoduleList } = require("../controller/modulelist");
// const domain = async()=>{
//     try{
//     let [data] = await read.query("SELECT * FROM module")
//     for(let x of data){
//         route.get(`/${x.name}` ,  getsubmodule)
//     }
//     }catch(err){
//     console.error(err);
//     }
//     }
    route.get('/test' ,  (req ,res)=>res.send({msg : "testing successfully"}))
    route.get('/module' ,  getmodule)

    route.post('/module/add' ,  add)

    route.get('/module/:m_id' , getmoduleList)
    route.get('/module/:m_id/:s_id' , submodule.getSubmoduledataData)
    route.post('/add/module/list' , addModuleList)
    route.put('/update/module/list' ,  updatemoduleList)
    route.delete('/delete/module/list' ,  deletemoduleList)

    route.delete('/module/delete' ,  deleteData)

    route.get('/module/find' ,  getData)

    // route.get('/submodule/add' ,  submodule.getSubmoduledataData)

    // route.put('/submodule/update' , submodule.update)

    // route.delete('/submodule/delete' ,  submodule.deleteData)

    // route.get('/submodule/find' ,  submodule.getData)

module.exports = route