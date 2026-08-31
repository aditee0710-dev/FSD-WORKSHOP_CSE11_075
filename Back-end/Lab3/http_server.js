// import http from "http";

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url == "/msg" && method == "GET") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.end("Welcome to backend");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
import http from "http";
const array = [
    {
        id: 1,
        name: "Aditi",
        age: 20
    },
    {
        id: 2,
        name: "Aaradhya",
        age: 21
    },
    {
        id: 3,
        name: "Aalia",
        age: 22
    }
];
const PORT = 8080;

const app = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Welcome to backend");
    }
    else if (url === "/user" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(array));
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");

        res.end("Route not found");
    }
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});