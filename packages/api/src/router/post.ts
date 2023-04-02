import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const postRouter = createTRPCRouter({
  all: publicProcedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/post.all',
        tags: ['post'],
        summary: 'get all posts',
      },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          content: z.string(),
        }),
      ),
    )
    .query(({ ctx }) => {
      return ctx.prisma.post.findMany({ orderBy: { id: 'desc' } });
    }),
  byId: publicProcedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/post.byId',
        tags: ['post'],
        summary: 'get a post by id',
      },
    })
    .input(z.object({ id: z.string() }))
    .output(
      z
        .object({
          id: z.string(),
          title: z.string(),
          content: z.string(),
        })
        .nullable(),
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.post.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .meta({
      openapi: {
        method: 'POST',
        path: '/post.create',
        tags: ['post'],
        summary: 'create a post',
      },
    })
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
      }),
    )
    .output(
      z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.post.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.post.delete({ where: { id: input } });
  }),
});
