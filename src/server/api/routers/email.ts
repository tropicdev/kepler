import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import z from "zod";
import { Prisma } from "@prisma/client";

export const emailRouter = createTRPCRouter({
  postEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.email.create({
          data: {
            email: input.email,
          },
        });
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            console.log(
              "There is a unique constraint violation, This email already exists"
            );
          }
        }
        return false;
      }

      return true;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.email.findMany();
  }),
});
