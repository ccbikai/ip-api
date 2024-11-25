import lib from './src/index'

const server = Bun.serve(lib);

console.log(`Listening on localhost:${server.port}`);
