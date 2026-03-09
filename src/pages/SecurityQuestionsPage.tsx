import { useState } from "react";
import { Shield, LogIn, AlertCircle, Stars, Type, Wine } from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

export function SecurityQuestionsPage({ navigate }: Props) {
  const [sternzeichen, setSternzeichen] = useState("");
  const [initialen, setInitialen] = useState("");
  const [lieblingsbar, setLieblingsbar] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sz = sternzeichen.trim().toLowerCase();
    const ini = initialen.trim().toLowerCase().replace(/\s/g, "");
    const bar = lieblingsbar.trim().toLowerCase();

    const szCorrect = sz === "fisch" || sz === "fische";
    const iniCorrect =
      ini === "aj" || ini === "a.j." || ini === "a.j" || ini === "aj.";
    const barCorrect = bar === "saufi saufi";

    if (szCorrect && iniCorrect && barCorrect) {
      navigate("inbox");
    } else {
      setError(
        "Eine oder mehrere Sicherheitsantworten sind falsch. Bitte versuche es erneut."
      );
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} showActions={false} />

      <div className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        </div>

        <div
          className={`max-w-md w-full animate-fade-in relative z-10 ${shake ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
          style={
            shake
              ? {
                  animation:
                    "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
                }
              : {}
          }
        >
          <style>{`
            @keyframes shake {
              10%, 90% { transform: translateX(-1px); }
              20%, 80% { transform: translateX(2px); }
              30%, 50%, 70% { transform: translateX(-4px); }
              40%, 60% { transform: translateX(4px); }
            }
          `}</style>

          <div className="glass-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-black mb-2">
                Identitätsprüfung
              </h1>
              <p className="text-gray-400 text-sm">
                Hallo <span className="text-neon-pink font-bold">schoolbunny06</span>!
                Bitte beantworte deine Sicherheitsfragen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Stars className="w-4 h-4 text-neon-pink" />
                  Dein Sternzeichen
                </label>
                <input
                  type="text"
                  value={sternzeichen}
                  onChange={(e) => {
                    setSternzeichen(e.target.value);
                    setError("");
                  }}
                  placeholder="z.B. Widder, Stier, ..."
                  className="input-field w-full px-4 py-3 rounded-xl text-white placeholder-gray-600"
                  autoFocus
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Type className="w-4 h-4 text-neon-purple" />
                  Deine Initialen
                </label>
                <input
                  type="text"
                  value={initialen}
                  onChange={(e) => {
                    setInitialen(e.target.value);
                    setError("");
                  }}
                  placeholder="z.B. AB"
                  className="input-field w-full px-4 py-3 rounded-xl text-white placeholder-gray-600"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Wine className="w-4 h-4 text-neon-blue" />
                  Deine Lieblingsbar
                </label>
                <input
                  type="text"
                  value={lieblingsbar}
                  onChange={(e) => {
                    setLieblingsbar(e.target.value);
                    setError("");
                  }}
                  placeholder="Name der Bar"
                  className="input-field w-full px-4 py-3 rounded-xl text-white placeholder-gray-600"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-xl font-bold cursor-pointer text-white flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs">
                🔒 Sicherheitsprüfung – Deine Daten sind geschützt
              </p>
            </div>

            <button
              onClick={() => navigate("login")}
              className="mt-4 text-gray-500 hover:text-gray-300 text-sm cursor-pointer transition-colors w-full text-center"
            >
              ← Anderer Nutzername
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
