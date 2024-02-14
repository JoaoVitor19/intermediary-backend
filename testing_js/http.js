import { createServer } from 'http';
import { parse } from 'url'
import { readFile } from 'fs';


createServer(function (req, res) {
        const q = parse(req.url, true);
        const serverpath = 'testing_js/html';
        const filename = serverpath + '/' + q.pathname;

        readFile(filename, function (error, data) {
                if (error) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        return res.end();
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
        })
}).listen(8080);