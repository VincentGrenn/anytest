import http from "http";

export default function NotFound(req: http.IncomingMessage, res: http.ServerResponse) {
    res.statusCode = 404;
    res.end(JSON.stringify({
        message: `Requested route "${req.url}" was not found!`,
    }));
};