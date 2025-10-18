import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
    try {
        // Fetch random cat fact
        const catResponse = await
        axios.get("https://catfact.ninja/fact", {
            timeout: 5000, // timeout after 5 seconds
        });

        const catFact = catResponse.data.fact;

        //Build response

        const response = {
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        };
        res.status(200).json(response);
    } catch (error) {
        console.error("Error fectching cat fact:", error.message);

        // Fallback message if  API fails
        res.status(200).json({
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: "Could not fetch cat fact at the moment. Try again later.",
        });
        
    };
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));