const express = require("express");
const app = express();

const PORT = 3000;
const VM_NAME = process.env.VM_NAME || "UNKNOWN";

app.get("/", (req, res) => {
    res.send(`Welcome from ${VM_NAME}`);
});

app.get("/api/users", (req, res) => {
    res.json({
        vm: VM_NAME,
        data: ["Ali", "Sara", "Ahmed"]
    });
});

app.get("/api/orders", (req, res) => {
    res.json({
        vm: VM_NAME,
        data: ["Order1", "Order2"]
    });
});

// ✅ FIX HERE
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Running on ${PORT}`);
});
