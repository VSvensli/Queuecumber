// Mayby overkill to move this into its own file, but just want to mirror enode/api
import { ServerRoute } from "@hapi/hapi";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export const userRoute: ServerRoute = {
  method: "POST",
  path: "/user",
  handler: async (request, h) => {
    const payload = userSchema.safeParse(request.payload);
    if (!payload.success) {
      return h
        .response({ error: "Invalid user data", details: payload.error.errors })
        .code(400);
    }
    return h.response({ message: "User created", data: payload }).code(201);
  },
};
