import { nanoid } from "nanoid";
import {
  type Chat,
  type ChatPayload,
  chatPayloadSchema,
  chatsSchema,
} from "@/models/Chat";
import { ChatRepository } from "./ChatRepository";

enum Storage {
  CHATS = "@chat-app/chats",
}

export class ChatRepositoryImpl implements ChatRepository {
  public save(chat: ChatPayload): Chat {
    const payload = chatPayloadSchema.parse(chat);
    const newChat: Chat = {
      id: nanoid(),
      text: payload.text,
    };

    const storageChats = this.findAll();
    storageChats.push(newChat);

    localStorage.setItem(Storage.CHATS, JSON.stringify(storageChats));

    return newChat;
  }

  public findAll(): Chat[] {
    const dataAsString = localStorage.getItem(Storage.CHATS);
    if (dataAsString == null) return [];

    const storageChats = JSON.parse(dataAsString);
    return chatsSchema.parse(storageChats);
  }

  public delete(chatId: string): void {
    throw new Error("Method not implemented.");
  }
}
