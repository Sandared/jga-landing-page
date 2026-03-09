import { useState } from "react";
import { Shield, ArrowRight, User } from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

export function LoginPage({ navigate }: Props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = username.trim().toLowerCase();
    if (trimmed === "schoolbunny06") {
      navigate("security");
    } else if (trimmed.length > 0) {
      navigate("nicetry");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} showActions={false} />

      <div className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-md w-full animate-fade-in relative z-10">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-black mb-2">Willkommen zurück</h1>
              <p className="text-gray-400 text-sm">
                Melde dich in deinem sicheren Postfach an
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nutzername
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Dein anonymer Nutzername"
                    className="input-field w-full pl-11 pr-4 py-3 rounded-xl text-white placeholder-gray-600"
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={username.trim().length === 0}
                className="btn-primary w-full py-3 rounded-xl font-bold cursor-pointer text-white flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                Weiter
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs">
                🔒 Deine Anmeldung ist End-to-End verschlüsselt
              </p>
            </div>

            <button
              onClick={() => navigate("landing")}
              className="mt-4 text-gray-500 hover:text-gray-300 text-sm cursor-pointer transition-colors w-full text-center"
            >
              ← Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
