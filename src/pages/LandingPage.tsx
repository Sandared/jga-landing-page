import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Zap,
  MessageSquare,
  Star,
  ArrowRight,
  Ghost,
  Fingerprint,
  ServerCrash,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const features = [
  {
    icon: <EyeOff className="w-8 h-8 text-neon-pink" />,
    title: "100% Anonym",
    description:
      "Keine Telefonnummer, keine E-Mail, keine Spuren. Wie ein Ninja, nur digital.",
  },
  {
    icon: <Lock className="w-8 h-8 text-neon-purple" />,
    title: "Militärische Verschlüsselung",
    description:
      "256-Bit AES End-to-End Verschlüsselung. Selbst die NSA gibt auf und geht nach Hause.",
  },
  {
    icon: <Ghost className="w-8 h-8 text-neon-blue" />,
    title: "Selbstzerstörende Nachrichten",
    description:
      "Nachrichten die sich auflösen wie deine guten Vorsätze im Januar.",
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-neon-pink" />,
    title: "Biometrische Sicherheit",
    description:
      "Gesichtserkennung, Fingerabdruck und Stimmanalyse. Dreifach hält besser.",
  },
  {
    icon: <ServerCrash className="w-8 h-8 text-neon-purple" />,
    title: "Keine Server-Logs",
    description:
      "Wir speichern nichts. Absolut gar nichts. Wir haben sogar vergessen, warum.",
  },
  {
    icon: <Zap className="w-8 h-8 text-neon-blue" />,
    title: "Blitzschnell",
    description:
      "Nachrichten kommen an, bevor du sie abschickst. Fast. Quantenphysik halt.",
  },
];

const testimonials = [
  {
    name: "DarkPhoenix42",
    role: "Power-User seit 2019",
    text: "Endlich kann ich meiner Oma heimlich Rezepte schicken, ohne dass meine Frau davon erfährt. 5 Sterne!",
    stars: 5,
  },
  {
    name: "CryptoKaren",
    role: "Verschlüsselungs-Enthusiastin",
    text: "Ich nutze naughty mail um meinen Nachbarn anonym mitzuteilen, dass ihre Hecke 2cm zu hoch ist. Funktioniert einwandfrei.",
    stars: 5,
  },
  {
    name: "StealthBernd",
    role: "Hobby-Agent",
    text: "Seit ich naughty mail nutze, weiß niemand mehr, dass ich derjenige bin, der im Büro immer den letzten Kaffee nimmt. Lebensrettend!",
    stars: 5,
  },
];

const stats = [
  { value: "2.4 Mio", label: "Geheime Nachrichten" },
  { value: "847K", label: "Anonyme Nutzer" },
  { value: "0", label: "Datenleaks" },
  { value: "∞", label: "Privatsphäre" },
];

export function LandingPage({ navigate }: Props) {
  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Eye className="w-4 h-4 text-neon-pink" />
              <span className="text-sm text-gray-300">
                Deine Nachrichten. Dein Geheimnis.
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
              Sag was du willst.
              <br />
              <span className="gradient-text">Absolut anonym.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              naughty mail ist der Messenger für alle Nachrichten, die nicht
              von neugierigen Augen gelesen werden sollen. Keine Kompromisse bei
              Privatsphäre. Keine Kompromisse bei Sicherheit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("register")}
                className="btn-primary px-8 py-4 rounded-xl text-lg font-bold animate-pulse-glow cursor-pointer text-white flex items-center justify-center gap-2"
              >
                Jetzt kostenlos starten
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("login")}
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-bold cursor-pointer flex items-center justify-center gap-2"
              >
                <LogInIcon />
                Einloggen
              </button>
            </div>
          </div>

          {/* Floating mockup */}
          <div className="mt-16 animate-float">
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Anonymer Absender</p>
                  <p className="text-xs text-gray-500">Verschlüsselt ✓</p>
                </div>
              </div>
              <div className="bg-dark-900/50 rounded-lg p-4 text-left">
                <p className="text-gray-300 text-sm">
                  Hey, das Paket ist am vereinbarten Ort. Du weißt schon, wo 😉
                  Niemand hat etwas bemerkt...
                </p>
                <p className="text-xs text-gray-600 mt-2 text-right">
                  🔒 Ende-zu-Ende verschlüsselt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Warum <span className="gradient-text">naughty mail</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Weil deine Geheimnisse es verdient haben, geheim zu bleiben.
              Unsere Features sind so sicher, selbst wir wissen nicht, was du
              schreibst.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card rounded-xl p-6 hover:border-neon-pink/30 transition-all duration-300"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Was unsere <span className="gradient-text">Nutzer</span> sagen
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Natürlich anonym. Was hast du erwartet?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink/50 to-neon-purple/50 flex items-center justify-center text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              So <span className="gradient-text">einfach</span> geht's
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Account erstellen",
                desc: "Kein Name, keine E-Mail. Nur ein Nutzername und ein unknackbares Passwort.",
              },
              {
                step: "02",
                title: "Kontakte finden",
                desc: "Teile deinen anonymen Code mit deinen Kontakten. Oder lass sie raten.",
              },
              {
                step: "03",
                title: "Sicher kommunizieren",
                desc: "Schreib was du willst. Wir vergessen es sofort. Versprochen.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mx-auto mb-4 text-xl font-black text-white">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-12">
          <MessageSquare className="w-12 h-12 text-neon-pink mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Bereit für <span className="gradient-text">echte Privatsphäre</span>
            ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Schließe dich über 847.000 Nutzern an, die ihre Kommunikation ernst
            nehmen. Oder zumindest so tun.
          </p>
          <button
            onClick={() => navigate("register")}
            className="btn-primary px-8 py-4 rounded-xl text-lg font-bold cursor-pointer text-white"
          >
            Jetzt kostenlos registrieren
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-neon-pink" />
            <span className="font-bold gradient-text">naughty mail</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 naughty-mail.de – Alle Rechte vorbehalten. Oder auch nicht.
            Wir sind anonym.
          </p>
        </div>
      </footer>
    </div>
  );
}

function LogInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  );
}
