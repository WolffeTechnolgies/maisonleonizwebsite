"use client";

import { useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted" | "error">(
    "idle",
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: wire up to a real mailing list provider (e.g. Klaviyo, Mailchimp).
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="font-display text-lg italic text-gold-muted">
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full border border-ink/20 bg-transparent px-4 py-3 text-sm tracking-wide text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none sm:border-r-0"
        />
        <button
          type="submit"
          className="whitespace-nowrap border border-ink bg-ink px-6 py-3 text-xs uppercase tracking-widest-plus text-ivory transition-colors hover:border-gold hover:bg-gold cursor-pointer"
        >
          Notify Me
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-700">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
}
