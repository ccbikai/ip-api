# IP-API

利用 Cloudflare Workers 或 Vercel Edge 快速搭一个获取 IP 地址和地理位置信息的接口。

## 使用方式

1. 通过访问 Cloudflare 获取本机 IP： `curl https://cloudflare-ip.html.zone/` 或者直接访问 <https://cloudflare-ip.html.zone/>
2. 通过访问 Vercel 获取本机 IP： `curl https://vercel-ip.html.zone/` 或者直接访问 <https://vercel-ip.html.zone/>
3. 通过访问 Cloudflare 获取本机 IP 地理位置信息, `curl https://cloudflare-ip.html.zone/geo` 或者直接访问 <https://cloudflare-ip.html.zone/geo>
4. 通过访问 Vercel 获取本机 IP 地理位置信息, `curl https://vercel-ip.html.zone/geo` 或者直接访问 <https://vercel-ip.html.zone/geo>

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

### 部署代码

```bash
# clone 此项目
git clone https://github.com/ccbikai/ip-api.git

# 安装依赖
npm i

## 部署到 Cloudflare Workers
npm run deploy

## 部署到 Vercel Edge
npm run prod
```

### 绑定域名

按照 Cloudflare 或 Vercel 文档绑定域名即可。

## 问题反馈

1. 提 Issue / Pull Request
2. 联系 <https://twitter.com/ccbikai>
