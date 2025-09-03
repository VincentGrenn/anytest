import http, { ServerResponse } from "http";

export default function PostUser(req: http.IncomingMessage, res: ServerResponse) {
    const ID = req.url?.split("/")[3];
    res.statusCode = 500;
    res.end(JSON.stringify({
        message: `Server refused to process ID ${ID} from POST request.`,
    }));
};