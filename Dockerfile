FROM oven/bun:alpine

COPY src ./src
COPY index.js .

ENV NODE_ENV=production
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "index.js" ]
