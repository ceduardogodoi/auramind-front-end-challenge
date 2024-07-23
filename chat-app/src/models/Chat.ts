import { z } from "zod";

// Chat Payload
export const chatPayloadSchema = z.object({
  text: z.string().min(1, "Escreva uma sentença"),
});
export type ChatPayload = z.infer<typeof chatPayloadSchema>;

// Chat
export const chatSchema = chatPayloadSchema.extend({
  id: z.string(),
});
export type Chat = z.infer<typeof chatSchema>;

// Chats
export const chatsSchema = z.array(chatSchema);
