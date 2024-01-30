# IP-API

利用 Cloudflare Workers / Vercel Edge / Netlify Edge 快速搭一个获取 IP 地址和地理位置信息的接口。

## 使用方式

### IP

1. 通过访问 Cloudflare 获取本机 IP： `curl https://cloudflare-ip.html.zone/` 或者直接访问 <https://cloudflare-ip.html.zone/>
2. 通过访问 Vercel 获取本机 IP： `curl https://vercel-ip.html.zone/` 或者直接访问 <https://vercel-ip.html.zone/>
3. 通过访问 Netlify 获取本机 IP： `curl https://netlify-ip.html.zone/` 或者直接访问 <https://netlify-ip.html.zone/>

### IP GEO

1. 通过访问 Cloudflare 获取本机 IP 地理位置信息, `curl https://cloudflare-ip.html.zone/geo` 或者直接访问 <https://cloudflare-ip.html.zone/geo>
2. 通过访问 Vercel 获取本机 IP 地理位置信息, `curl https://vercel-ip.html.zone/geo` 或者直接访问 <https://vercel-ip.html.zone/geo>
3. 通过访问 Netlify 获取本机 IP 地理位置信息, `curl https://netlify-ip.html.zone/geo` 或者直接访问 <https://netlify-ip.html.zone/geo>

> HTTP 响应头 `x-client-ip` 也是用户 IP 地址。

GEO 信息格式：

```json
{
    "ip": "142.171.116.110",
    "city": "Los Angeles",
    "country": "US",
    "flag": "🇺🇸",
    "countryRegion": "California",
    "region": "LAX",
    "latitude": "34.05440",
    "longitude": "-118.24410",
    "asOrganization": "Multacom Corporation"
}
```

## 部署方式

### 1. 部署代码

```bash
# clone 此项目
git clone https://github.com/ccbikai/ip-api.git

# 安装依赖
npm i

## 部署到 Cloudflare Workers
npm run deploy:cloudflare

## 部署到 Vercel Edge
npm run deploy:vercel

## 部署到 Netlify Edge
npm run deploy:netlify
```

### 2. 绑定域名

按照 Cloudflare/Vercel/Netlify 文档绑定域名即可。

### 3. IPv4/IPv6 Only

Cloudflare 支持 IPv4 和 IPv6 访问，如果想只支持单栈，可以只解析 A/AAAA 记录到 Cloudflare 的泛拨 IP。

比如: <https://cloudflare-ip-v4.html.zone/> 和 <http://cloudflare-ip-v6.html.zone/>

## 问题反馈

1. 提 Issue / Pull Request
2. 联系 <https://twitter.com/ccbikai>
