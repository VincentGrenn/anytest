import http from "http";

export default function GetAllUsers(req: http.IncomingMessage, res: http.ServerResponse) {
    res.end(JSON.stringify({
        message: "Home Page",
    }));
};