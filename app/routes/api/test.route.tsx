import type { LoaderFunctionArgs } from "@remix-run/node";
import RateLimiter from '~/lib/RateLimiter';

export async function loader({ request }: LoaderFunctionArgs) {
    const ip = request.headers.get('X-Forwarded-For');
    console.log(ip);
    const limiter = RateLimiter(request)
    if (!limiter) return new Response(JSON.stringify({ error: "Too many requests, slow down!" }), { status: 429 });
    return new Response(JSON.stringify({ok: true}))
}