import express from "express";
import fs from "fs";
const app = express();
const port = 7000;
app.use(express.json());

const file = "./users.json";
// READ FILE
function getData() {
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
}
// WRITE FILE
function saveData(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

app.get("/user", (req, res) => {
    try {
        const users = getData();

        res.status(200).json({
            message: "Users fetched successfully",
            users
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});
// user by id
app.get("/user/:id", (req, res) => {
    try {
        const users = getData();

        const id = req.params.id;

        const user = users.find((u) => u.id == id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User found",
            user
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});
// user creation
app.post("/create", (req, res) => {
    try {
        const users = getData();

        const { id, name, dept, classs } = req.body;

        const newUser = {
            id,
            name,
            dept,
            classs
        };

        users.push(newUser);

        saveData(users);

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});
// user update
app.put("/edit/:id", (req, res) => {
    try {
        const users = getData();

        const id = req.params.id;

        const index = users.findIndex((u) => u.id == id);

        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const { name, dept, classs } = req.body;

        users[index].name = name;
        users[index].dept = dept;
        users[index].classs = classs;

        saveData(users);

        res.status(200).json({
            message: "User updated successfully",
            user: users[index]
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});
// delete user
app.delete("/delete/:id", (req, res) => {
    try {
        const users = getData();

        const id = req.params.id;

        const index = users.findIndex((u) => u.id == id);

        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);

        saveData(users);

        res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser[0]
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});
app.listen(port, () => {
    console.log(`Running on server ${port}`);
});