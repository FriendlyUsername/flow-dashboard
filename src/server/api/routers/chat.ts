import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Mocked DB
interface Post {
  id: number;
  name: string;
}
const posts: Post[] = [
  {
    id: 1,
    name: "Is there anything else I can help with?",
  },
  {
    id: 2,
    name: "I want the bot to ask for the customer's name and confirm it by spelling it back.",
  },
  {
    id: 3,
    name: "New node created Customer Name",
  },
  {
    id: 4,
    name: "Node intro to the call was updated with new questions",
  },
];

export const chatRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      const post: Post = {
        id: posts.length + 1,
        name: `The answer to you question (${input.name}) is: hiring me is a great choice! `,
      };
      posts.push(post);
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return posts.at(-1) ?? null;
  }),
  getAll: publicProcedure.query(() => {
    return posts;
  }),
});
