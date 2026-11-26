
const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.post("/send", (req, res) => {
    const { name, testId, testCode, testDate } = req.body;

    if (
        typeof name !== "string" ||
        typeof testId !== "string" ||
        typeof testCode !== "string" ||
        typeof testDate !== "string"
    ) {
        return res.status(400).json({ success: false });
    }

    const result = {
        name: name.slice(0, 80),
        testId: testId.slice(0, 40),
        testCode: testCode.slice(0, 40),
        testDate: testDate.slice(0, 7)
    };

    console.log("Přijaté demo údaje:", result);

    res.json({
        success: true,
        message: "Testovací data přijata."
    });
});

app.listen(3000, () => {
    console.log("Server běží na http://localhost:3000");
});
