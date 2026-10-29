import { PreviewBanner } from "./PreviewBanner";

/** Chatbot PREVIEW shell — local/demo defaults; no secrets; no LIVE Stripe. */
export function ChatbotPreview() {
  return (
    <section id="chatbot" aria-labelledby="chatbot-heading">
      <PreviewBanner />
      <h1 id="chatbot-heading">Horizon Chatbot PREVIEW</h1>
      <p>
        Development chat shell. Local/demo defaults. Not production · Not certified · Not customer
        GA. No durable memory for anonymous visitors. No LIVE payments.
      </p>
      <p className="disclosure">
        AI-generated responses may be incorrect. If you or someone you know is in crisis, contact
        988 (US) or local emergency services.
      </p>
    </section>
  );
}
