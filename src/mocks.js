import { setupWorker, rest } from 'msw'

import * as url from './constants/url';

const baseURI = 'http://localhost:3000';
// 2. Define request handlers and response resolvers
const worker = setupWorker(
  rest.get(baseURI + url.LOGIN, (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Successful lol.',
      }),
    )
  }),
)

export { worker };