import type { LoaderFunctionArgs } from "@remix-run/node";
import RateLimiter from '~/lib/RateLimiter';
import * as ServerFunctions from "~/lib/Utilities/server";
import ErrorCodes from "~/lib/json/errorCodes.json";
import redisDB from "~/lib/redisDB";

import User from "~/models/User";

const AuthenticationFunctions = ServerFunctions.Authentication;

export async function loader({ request }: LoaderFunctionArgs) {
    let canAccess = RateLimiter(request, "signup_get", 5 * 1000, 50)
    if (!canAccess) return new Response("Too many requests", { status: ErrorCodes.TOO_MANY_REQUESTS });
    const cookies = request.headers.get("Cookie");

    const client = await redisDB();
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    try {
        const userInfoCache = await client.get(`userinfo:${ip}`)
        if (userInfoCache) {
            return Response.json(JSON.parse(userInfoCache))
        }
    } catch (er) { 
        // Can't connect to redis.
     }

    try {
        const refreshToken = await AuthenticationFunctions.refreshTokenCookie.parse(cookies);
        const userInfo = await AuthenticationFunctions.decodeRefreshToken(refreshToken);
        const userid = Number(userInfo.id);
        const userSchema = await User.findOne({ userid });
        const userData = ServerFunctions.GetUserInfoServer(userSchema);
        if (client) {
            await client.set(`userinfo:${ip}`, JSON.stringify(userData), { EX: 30 })
        }
        return Response.json(userData)
    } catch (er) {
        return new Response("Unauthorized", { status: ErrorCodes.UNAUTHORIZED });
    }
}