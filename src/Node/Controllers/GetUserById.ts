import http from "http";

export default function GetUserById(req: http.IncomingMessage, res: http.ServerResponse) {
    const ID = req.url?.split("/")[3];
    res.end(JSON.stringify({
        message: `Retrieved user with a user id of ${ID}!`,
    }));
};