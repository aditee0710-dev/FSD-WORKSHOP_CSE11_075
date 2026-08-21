import fs from "fs/promises";

const FilePath = "./data.json";

// Create JSON file
async function createFile(data) {
    try {
        await fs.writeFile(
            FilePath,
            JSON.stringify(data, null, 2),
            "utf8"
        );

        console.log("JSON file created successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}

// Read JSON file
async function readFile() {
    try {
        const content = await fs.readFile(FilePath, "utf8");
        const data = JSON.parse(content);

        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Append data to JSON file
async function appendFile(newData) {
    try {
        const content = await fs.readFile(FilePath, "utf8");
        const data = JSON.parse(content);

        data.push(newData);

        await fs.writeFile(
            FilePath,
            JSON.stringify(data, null, 2),
            "utf8"
        );

        console.log("Data appended successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}

// Main function
async function main() {
    await createFile([
        {
            name: "Aditi",
            age: 20
        }
    ]);

    await readFile();
}

// Run program
main();