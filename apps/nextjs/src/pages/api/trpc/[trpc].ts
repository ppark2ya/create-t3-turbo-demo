import { type NextApiRequest, type NextApiResponse } from 'next';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import cors from 'nextjs-cors';

import { appRouter, createTRPCContext } from '@acme/api';

// If you need to enable cors, you can do so like this:
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Enable cors
  await cors(req, res);

  // Let the tRPC handler do its magic
  return createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
