"use client";

import { useEffect, useMemo, useState } from "react";
import { ChatRepositoryImpl } from "@/repositories/ChatRepositoryImpl";
import type { Chat, ChatPayload } from "@/models/Chat";

export function useChatRepository() {
  const [chats, setChats] = useState<Chat[]>([]);

  const chatRepository = useMemo(() => {
    return ChatRepositoryImpl.getInstance();
  }, []);

  useEffect(() => {
    const storageChats = chatRepository.findAll();
    setChats(storageChats);
  }, [chatRepository]);

  function save(payload: ChatPayload) {
    const newChat = chatRepository.save(payload);
    setChats((chats) => [...chats, newChat]);
  }

  return {
    chats,
    save,
  };
}
