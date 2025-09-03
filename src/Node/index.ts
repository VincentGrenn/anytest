import http from "http";
import GetAllUsers from "./Controllers/GetAllUsers";
import GetUserById from "./Controllers/GetUserById";
import PostUser from "./Controllers/PostUser";
import NotFound from "./Controllers/NotFound";

const PORT = 5000;

// JSON Middleware \\

function JSONInitializerMiddleware(req: http.IncomingMessage, res: http.ServerResponse, next: () => any) {
    res.writeHead(200, {"Content-Type": "application/json"});
    next();
}

const Server = http.createServer((req, res) => {
    JSONInitializerMiddleware(req, res, () => {
        if (req.method === "GET") {
            if (req.url === "/") {
                GetAllUsers(req, res);
                return;
            } else if (req.url?.match(/\/api\/users\/([0-9]+)/)) {
                GetUserById(req, res);
                return;
            }
            return;
        } else if (req.method === "POST") {
            if (req.url?.match(/\/api\/users\/([0-9]+)/)) {
                PostUser(req, res);
                return;
            }
        }
        NotFound(req, res);
    });
});

Server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
});