import { useState, useEffect } from "react";
import { ShieldX, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const messages = [
  "Nice try ;)",
  "Netter Versuch 😏",
  "Fast! Aber nur fast... ;)",
  "Nice try, Sherlock 🕵️",
  "Haha, schön probiert ;)",
  "Nope. Nice try though! 😄",
  "Das war's leider nicht ;)",
  "Versuch's nochmal, Hacker 💀",
  "So einfach ist es nicht ;)",
  "Nice try, aber nein 😜",
  "Knapp daneben ist auch vorbei ;)",
  "404: Nutzer nicht gefunden... oder doch? ;)",
];

export function NiceTryPage({ navigate }: Props) {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
    setTimeout(() => setShowMessage(true), 300);
  }, []);

  const tryAgain = () => {
    setShowMessage(false);
    setTimeout(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMsg);
      setShowMessage(true);
    }, 200);
  };

  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} showActions={false} />

      <div className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full animate-fade-in">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <ShieldX className="w-10 h-10 text-red-400" />
            </div>

            <h1 className="text-xl font-black mb-2 text-red-400">
              Zugriff verweigert
            </h1>

            <div
              className={`transition-all duration-500 ${showMessage ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <p className="text-3xl font-black gradient-text my-8">
                {message}
              </p>
            </div>

            <p className="text-gray-500 text-sm mb-6">
              Der eingegebene Nutzername wurde nicht gefunden. Bitte überprüfe
              deine Eingabe und versuche es erneut.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("login")}
                className="btn-primary w-full py-3 rounded-xl font-bold cursor-pointer text-white flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Erneut versuchen
              </button>
              <button
                onClick={tryAgain}
                className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer transition-colors"
              >
                Oder klick hier für eine andere Nachricht 😉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
