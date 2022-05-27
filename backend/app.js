const http = require('http')
const { getReqData } = require("./utils/getRaquestData");
const PORT = process.env.PORT || 5000;


const server = http.createServer(async (req, res) => {

    const { url, method } = req

    if (url === "/api/convert" && method === "POST") {

        res.writeHead(200, { "Content-Type": "application/json" });

        const data = await getReqData(req)

        res.end();
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
