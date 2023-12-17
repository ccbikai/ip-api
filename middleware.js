import { ipAddress, geolocation, json } from '@vercel/edge';

export default function middleware(request) {
  const ip = ipAddress(request)
  const { pathname } = new URL(request.url)
  console.log(ip, pathname)
  if (pathname === '/geo') {
    const geo = geolocation(request);
    console.log(geo)
    return json({
      ip,
      ...geo
    })
  }
  return new Response(ip)
}
