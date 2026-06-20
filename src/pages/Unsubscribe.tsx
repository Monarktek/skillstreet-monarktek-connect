import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "invalid" | "already" | "done" | "error";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success || data?.reason === "already_unsubscribed") setState("done");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="max-w-md w-full rounded-2xl border border-border bg-card p-8 text-center">
        <h1 className="font-display font-bold text-2xl tracking-tight">Unsubscribe</h1>
        {state === "loading" && <p className="mt-4 text-muted-foreground">Checking your link…</p>}
        {state === "valid" && (
          <>
            <p className="mt-4 text-muted-foreground">
              Click below to stop receiving these emails.
            </p>
            <button
              onClick={confirm}
              disabled={submitting}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Processing…" : "Confirm unsubscribe"}
            </button>
          </>
        )}
        {state === "already" && (
          <p className="mt-4 text-muted-foreground">You're already unsubscribed.</p>
        )}
        {state === "done" && (
          <p className="mt-4 text-muted-foreground">You've been unsubscribed. Sorry to see you go.</p>
        )}
        {state === "invalid" && (
          <p className="mt-4 text-muted-foreground">This unsubscribe link is invalid or expired.</p>
        )}
        {state === "error" && (
          <p className="mt-4 text-muted-foreground">Something went wrong. Please try again later.</p>
        )}
      </div>
    </div>
  );
}