import { json } from '@vercel/edge'
import { getFlag } from './utils'
import { CORS_HEADERS} from './config'

export default {
  fetch(request) {
    const ip = request.headers.get('x-real-ip')
    const { pathname } = new URL(request.url)
    console.log(ip, pathname)
    if (pathname === '/geo') {
      const geo = {
        city: request.cf.city,
        country: request.cf.country,
        flag: getFlag(request.cf.country),
        countryRegion: request.cf.region,
        region: request.cf.colo,
        latitude: request.cf.latitude,
        longitude: request.cf.longitude,
        asOrganization: request.cf.asOrganization
      }
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
}
