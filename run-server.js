import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';

// app.use(cors());
// app.options('*', cors())

app.use(base, express.static('dist/client/'));
app.use(ssrHandler);

app.listen(4822);

console.log(`[${new Date().toUTCString()}] Listening on 4822`);