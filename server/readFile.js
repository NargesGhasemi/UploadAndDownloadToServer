var fs = require("fs");

exports.readHandler = function(req, res) {
    fs.readFile("./data.txt", function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
};
