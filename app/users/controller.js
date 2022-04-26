const users = require('./model');

const index = async (req, res, next) => {
    res.send(`<h1>BEWD Individual Project</h1>
              <h3>Robot, Ryven Rainhard</h3>`);
}

const getUserById = async (req, res, next) => {
    try {
        const result = await users.findById(req.params.id);

        res.send({
            status: 'Success',
            message: "GET users by ID",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: "GET user by ID error",
            message: e.message,
        });
    }
}

const getUsers = async (req, res, next) => {
    try {
        const result = await users.find();

        res.send({
            status: 'Success',
            message: "GET users",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: 'Error',
            message: e.message,
        });
    }
}

const putUser = async (req, res, next) => {
    console.log(`id: ${req.params.id} | name: ${req.body.name} | age: ${req.body.age} | status: ${req.body.status}`)

    try {
        const result = await users.updateOne({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });

        res.send({
            status: 'Success',
            message: "PUT user",
            result: result,
            updatedData: await users.findById(req.params.id),
        });
    }
    catch(e) {
        res.send({
            status: "PUT user error",
            message: e.message,
        });
    }
}

const postUser = async (req, res, next) => {
    try {
        const result = await users.create({
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });

        res.send({
            status: 'Success',
            message: "POST user",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: "POST user error",
            message: e.message,
        });
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const userDelete = await users.findById(req.params.id);
        const result = await users.deleteOne({_id: req.params.id});

        res.send({
            status: 'Success',
            message: "DELETE users by Id",
            result: result,
            deletedUser: userDelete,
        });
    }
    catch(e) {
        res.send({
            status: "DELETE user by Id error",
            message: e.message,
        });
    } 
}

module.exports = {
    index,
    getUserById,
    getUsers, 
    putUser,
    postUser,
    deleteUser,
};
