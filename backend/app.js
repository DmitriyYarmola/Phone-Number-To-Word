const http = require('http');
const { getReqData } = require("./utils/getRaquestData");
const { Controller } = require('./controller')


const PORT = process.env.PORT || 5000;

const converter = new Controller()

const server = http.createServer(async (req, res) => {

    const { url, method } = req

    if (url === "/api/convert" && method === "POST") {

        res.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});

        const data = await getReqData(req)

        if (data) {
            const {number} = JSON.parse(data)
            const result = await converter.convertNumber(number)
            res.end(JSON.stringify({result}))
        }

    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
