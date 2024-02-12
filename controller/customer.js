const { read, write } = require('../db/db-config')

const SQL_ALL_CUSTOMER = `select * from customer where is_deleted = 0`;
const SQL_ADD_CUSTOMER = `Insert into customer(customer_name) value (?)  `

const allCustomer = async (req, res) => {
    try{
        let allCustomer = await write.query(SQL_ALL_CUSTOMER);
        if (allCustomer > 0) {

            return res.status(200).send({ status: "success", allCustomer });

        }
        else {
            return res.status(200).send({ status: "success", msg: "No data found" })

        }
    }
    catch(err){
        res.status(500).send({ status: "fail", msg: "Something went wrong" })
    }
}

const addCustomer = async(req, res) => {
    try{
        const {customer_name} = req.body;
       await write.query(SQL_ADD_CUSTOMER, [customer_name])
       return res.status(200).send({ status: "success", msg:" Customer Added Successfully" });


    }
    catch(err){
        res.status(500).send({ status: "fail", msg: "Something went wrong" })

    }
}

module.exports = {
    allCustomer,
    addCustomer
}

