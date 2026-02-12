"use client";

import { useRef, useState } from "react";

type EmailFormProps = {
  id?: string;
  buttonLabel: string;
};

type Status = "idle" | "loading" | "success" | "exists" | "error";

export default function EmailForm({ id, buttonLabel }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef(Date.now());

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          honeypot,
          startedAt: startedAt.current
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus(data.alreadyExists ? "exists" : "success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="cta" id={id} aria-label={buttonLabel} onSubmit={onSubmit}>
      <label className="sr-only" htmlFor={id ? `${id}-email` : "email"}>
        Votre email
      </label>
      <input
        id={id ? `${id}-email` : "email"}
        name="email"
        type="email"
        placeholder="Votre email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={status === "loading"}
      />
      <input
        className="honeypot"
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        aria-hidden="true"
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Envoi..." : buttonLabel}
      </button>
      <span className={`form-feedback ${status}`}>
        {status === "success" && "Merci, vous êtes inscrit."}
        {status === "exists" && "Déjà inscrit. Merci !"}
        {status === "error" && "Une erreur est survenue."}
      </span>
    </form>
  );
}
