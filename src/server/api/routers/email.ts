import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import z from "zod";

export const emailRouter = createTRPCRouter({
  postEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.email.create({
        data: {
          email: input.email,
        },
      });
      return;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.email.findMany();
  }),
});
