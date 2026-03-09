import { AlertTriangle, LogIn, UserX } from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

export function RegisterPage({ navigate }: Props) {
  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} showActions={false} />

      <div className="pt-32 pb-20 px-4 flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full animate-fade-in">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-6">
              <UserX className="w-10 h-10 text-orange-400" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black mb-4">
              Registrierung derzeit{" "}
              <span className="text-orange-400">nicht möglich</span>
            </h1>

            <div className="glass-card rounded-xl p-4 mb-6 border-orange-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm text-left leading-relaxed">
                  Aufgrund der extrem hohen Nachfrage können wir derzeit leider
                  <strong className="text-orange-300">
                    {" "}
                    keine neuen Kunden
                  </strong>{" "}
                  mehr aufnehmen. Unsere Server arbeiten bereits am Limit, um
                  die Anonymität und Sicherheit unserer bestehenden Nutzer zu
                  gewährleisten.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Du hast bereits einen Account? Dann kannst du dich ganz normal
              einloggen und auf dein Postfach zugreifen.
            </p>

            <button
              onClick={() => navigate("login")}
              className="btn-primary px-8 py-3 rounded-xl font-bold cursor-pointer text-white flex items-center justify-center gap-2 w-full"
            >
              <LogIn className="w-5 h-5" />
              Zum Login
            </button>

            <button
              onClick={() => navigate("landing")}
              className="mt-4 text-gray-500 hover:text-gray-300 text-sm cursor-pointer transition-colors"
            >
              ← Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
