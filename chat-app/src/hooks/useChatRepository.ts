"use client";

import { useEffect, useState } from "react";
import { ChatRepositoryImpl } from "@/repositories/ChatRepositoryImpl";
import type { Chat } from "@/models/Chat";

export function useChatRepository() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const chatRepository = ChatRepositoryImpl.getInstance();
    const storageChats = chatRepository.findAll();
    setChats(storageChats);
  }, []);

  return {
    chats,
  };
}
