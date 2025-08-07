"use client";

import { useState } from "react";
import { Textarea } from "~/components/ui/textarea";

import { api } from "~/trpc/react";

export function LatestChat() {
  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.chat.create.useMutation({
    onSuccess: async () => {
      await utils.chat.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <Textarea
          placeholder="Ask Nimbus..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
