import { ipAddress, geolocation, json } from '@vercel/edge'
import { CORS_HEADERS} from './src/config'

export default function middleware(request) {
  const ip = ipAddress(request)
  const { pathname } = new URL(request.url)
  console.log(ip, pathname)
  if (pathname === '/geo') {
    const geo = geolocation(request)
    console.log(geo)
    return json({
      ip,
      ...geo
    }, {
      headers: {
        ...CORS_HEADERS,
        'x-client-ip': ip
      }
    })
  }
  return new Response(ip, {
    headers: {
      ...CORS_HEADERS,
      'x-client-ip': ip
    }
  })
}
