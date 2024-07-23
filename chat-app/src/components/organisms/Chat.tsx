"use client";

import { Textarea } from "@/components/atoms/Textarea";
import { useChatRepository } from "@/hooks/useChatRepository";
import { chatPayloadSchema } from "@/models/Chat";
import { FormEvent } from "react";

export function Chat() {
  const { chats, save } = useChatRepository();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const payload = chatPayloadSchema.parse(data);
    save(payload);
  }

  return (
    <div>
      <div>
        <output>
          {JSON.stringify(chats, null, 2)}
        </output>
      </div>

      <form onSubmit={handleSubmit}>
        <Textarea name="text" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
