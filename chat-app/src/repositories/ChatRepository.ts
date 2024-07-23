import type { Chat, ChatPayload } from "@/models/Chat";

export interface ChatRepository {
  save(chat: ChatPayload): Chat;

  findAll(): Chat[];

  delete(chatId: string): void;
}
