"use client";

import { Textarea } from "@/components/atoms/Textarea";
import { useChatRepository } from "@/hooks/useChatRepository";

export function Chat() {
  const { chats } = useChatRepository();

  return (
    <div>
      <div>
        <output>
          {/* Certainly! Here&apos;s a JSON array of pets with various attributes: */}
          {JSON.stringify(chats, null, 2)}
        </output>
      </div>

      <Textarea />
    </div>
  );
}
