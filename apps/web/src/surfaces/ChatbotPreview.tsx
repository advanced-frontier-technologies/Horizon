import { useState } from "react";
import type { FormEvent } from "react";
import { getPreviewConfig } from "../config";
import { PreviewBanner } from "./PreviewBanner";

interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
}

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Horizon Chat PREVIEW — local/demo replies only. Not production. Not certified. Not customer GA.",
};

export function ChatbotPreview() {
  const config = getPreviewConfig();
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [draft, setDraft] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) {
      return;
    }

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
    };

    const reply = config.oidcConfigured
      ? "Demo reply (OIDC vars present in this build). Still PREVIEW — no LIVE inference SLA, no LIVE Stripe."
      : "OIDC is unset — sign-in and cloud inference stay fail-closed. This is a local/demo echo only.";

    const assistantMsg: ChatMessage = {
      id: `a-${Date.now()}`,
      role: "assistant",
      text: reply,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setDraft("");
  }

  return (
    <section className="surface surface--chat" aria-labelledby="chat-title">
      <PreviewBanner surface="chatbot" />
      <header className="surface__header">
        <p className="surface__eyebrow">Horizon</p>
        <h1 id="chat-title" className="surface__title">
          Chatbot PREVIEW
        </h1>
        <p className="surface__lede">
          Development chat shell with local/demo defaults. Features may change
          or stop without notice.
        </p>
      </header>

      <div className="status-row" role="group" aria-label="Operator status">
        <span className="status-chip">
          Mode: {config.demoLabel}
        </span>
        <span
          className={
            config.oidcConfigured
              ? "status-chip status-chip--ok"
              : "status-chip status-chip--closed"
          }
        >
          OIDC: {config.oidcConfigured ? "configured (still PREVIEW)" : "unset · fail-closed"}
        </span>
        <span className="status-chip status-chip--closed">
          Stripe: {config.stripeMode === "demo" ? "DEMO only" : "OFF · no LIVE"}
        </span>
      </div>

      {!config.oidcConfigured ? (
        <p className="callout callout--warn" role="note">
          Sign-in stays unavailable until an operator sets{" "}
          <code>VITE_OIDC_ISSUER</code> and <code>VITE_OIDC_CLIENT_ID</code>.
          Anonymous visitors get no durable memory.
        </p>
      ) : null}

      <div className="chat-panel" aria-live="polite">
        <ul className="chat-log">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`chat-log__item chat-log__item--${msg.role}`}
            >
              <span className="chat-log__role">{msg.role}</span>
              <p>{msg.text}</p>
            </li>
          ))}
        </ul>

        <form className="chat-composer" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="chat-draft">
            Message
          </label>
          <textarea
            id="chat-draft"
            name="draft"
            rows={3}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a PREVIEW message…"
          />
          <button type="submit" className="btn-primary">
            Send (demo)
          </button>
        </form>

        <aside className="disclosure" aria-label="AI and crisis disclosure">
          <p>
            <strong>AI disclosure:</strong> Replies are generated or echoed by
            software. They can be wrong. This is not a person and not a medical
            or clinical service.
          </p>
          <p>
            If you are in crisis or thinking about harming yourself, contact{" "}
            <a href="tel:988">988</a> (Suicide &amp; Crisis Lifeline) or local
            emergency services. Do not rely on this PREVIEW chat for crisis
            support.
          </p>
        </aside>
      </div>
    </section>
  );
}
