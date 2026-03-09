import { useState } from "react";
import {
  Shield,
  Inbox,
  Mail,
  MailOpen,
  ArrowLeft,
  LogOut,
  Clock,
  ShoppingBag,
  KeyRound,
  MapPin,
  ExternalLink,
  Package,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

interface MailItem {
  id: number;
  from: string;
  subject: string;
  preview: string;
  date: string;
  time: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

function Email1Content() {
  return (
    <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
      <div className="flex items-center gap-2 text-green-400 font-bold text-base mb-4">
        <Package className="w-5 h-5" />
        Bestellbest&auml;tigung
      </div>
      <p>Sehr geehrte Kundin,</p>
      <p>
        vielen Dank f&uuml;r Ihren Kauf bei <strong>SafeVault GmbH</strong>! Wir
        freuen uns, Ihre Bestellung best&auml;tigen zu k&ouml;nnen.
      </p>
      <div className="glass-card rounded-xl p-4 my-4 space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">
          Bestelldetails
        </p>
        <div className="flex justify-between">
          <span className="text-gray-400">Bestellnummer:</span>
          <span className="font-mono text-neon-pink">#NM-20251221-4782</span>
        </div>
        <div className="flex justify-between flex-wrap gap-1">
          <span className="text-gray-400">Produkt:</span>
          <span className="font-semibold text-white">
            {`Securitykoffer Modell \u201EFalsebottom\u201C`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Anzahl:</span>
          <span>1</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Bestelldatum:</span>
          <span>21.12.2025, 21:34 Uhr</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className="text-green-400 font-semibold">{"\u2713"} Best&auml;tigt</span>
        </div>
      </div>
      <p>
        {`Der Securitykoffer Modell \u201EFalsebottom\u201C ist unser meistverkauftes Hochsicherheitsprodukt und bietet maximalen Schutz f\u00FCr Ihre wertvollsten Gegenst\u00E4nde. Mit doppeltem Boden, manipulationssicherer Verriegelung und kratzfester Titanium-Beschichtung sind Ihre Inhalte bestens gesch\u00FCtzt.`}
      </p>
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <p className="text-yellow-300 font-semibold mb-1">
          {"\u26A0\uFE0F"} Wichtiger Hinweis zum Sicherheitscode
        </p>
        <p className="text-yellow-200/80 text-sm">
          Der individuelle Hochsicherheitscode zum &Ouml;ffnen Ihres
          Securitykoffers wird Ihnen aus Sicherheitsgr&uuml;nden in einer{" "}
          <strong>separaten E-Mail</strong> zugestellt. Bitte bewahren Sie
          diesen Code sicher auf und teilen Sie ihn mit niemandem.
        </p>
      </div>
      <p>
        Sollten Sie Fragen zu Ihrer Bestellung haben, erreichen Sie unseren
        Kundenservice rund um die Uhr unter support@safevault-gmbh.de.
      </p>
      <p>
        Mit freundlichen Gr&uuml;&szlig;en,
        <br />
        <strong>Ihr SafeVault Team</strong>
        <br />
        <span className="text-gray-500 text-xs">
          SafeVault GmbH &middot; Tresorweg 7 &middot; 10115 Berlin
        </span>
      </p>
      <div className="border-t border-white/5 pt-3 mt-6">
        <p className="text-gray-600 text-xs">
          Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht
          auf diese Nachricht. Referenz: SV-FB-2025-47829
        </p>
      </div>
    </div>
  );
}

function Email2Content() {
  return (
    <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
      <div className="flex items-center gap-2 text-neon-pink font-bold text-base mb-4">
        <KeyRound className="w-5 h-5" />
        Sicherheitscode aktiviert
      </div>
      <p>Sehr geehrte Kundin,</p>
      <p>
        in Bezug auf Ihre Bestellung{" "}
        <span className="font-mono text-neon-pink">#NM-20251221-4782</span>{" "}
        {`(Securitykoffer Modell \u201EFalsebottom\u201C) m\u00F6chten wir Ihnen mitteilen, dass Ihr pers\u00F6nlicher Hochsicherheitscode erfolgreich konfiguriert wurde.`}
      </p>
      <div className="glass-card rounded-xl p-4 my-4 space-y-3">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">
          Sicherheitscode-Information
        </p>
        <div className="flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className="text-green-400 font-semibold">{"\u2713"} Code aktiv</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Aktiviert am:</span>
          <span>22.12.2025, 09:15 Uhr</span>
        </div>
      </div>
      <div className="bg-neon-pink/10 border border-neon-pink/20 rounded-xl p-4">
        <p className="text-neon-pink font-semibold mb-2">
          {"\uD83D\uDD10"} Ihr Sicherheitscode
        </p>
        <p className="text-gray-300 text-sm">
          {`Der Code wurde gem\u00E4\u00DF Ihren Sicherheitspr\u00E4ferenzen gesetzt auf:`}
        </p>
        <div className="mt-2 text-center">
          <span className="font-mono text-lg text-white bg-dark-900/80 px-6 py-2 rounded-lg inline-block tracking-[0.3em]">
            {"<Bestellmonat><Geburtsmonat>"}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-3 text-center">
          {"(Beide Monate als zweistellige Zahl, z.B. 0103 f\u00FCr Januar & M\u00E4rz)"}
        </p>
      </div>
      <p>
        {`Bitte merken Sie sich diesen Code gut und bewahren Sie ihn an einem sicheren Ort auf. Aus Sicherheitsgr\u00FCnden kann der Code `}
        <strong>nicht zur&uuml;ckgesetzt</strong>
        {` werden und wird auch nicht erneut per E-Mail versendet.`}
      </p>
      <p>
        {`Wir empfehlen Ihnen, den Code nach dem Lesen dieser E-Mail aus Ihrem Postfach zu l\u00F6schen.`}
      </p>
      <p>
        {`Bei Fragen stehen wir Ihnen jederzeit zur Verf\u00FCgung.`}
      </p>
      <p>
        {`Mit freundlichen Gr\u00FC\u00DFen,`}
        <br />
        <strong>{"Sicherheitsabteilung \u2013 SafeVault GmbH"}</strong>
        <br />
        <span className="text-gray-500 text-xs">
          SafeVault GmbH &middot; Tresorweg 7 &middot; 10115 Berlin
        </span>
      </p>
      <div className="border-t border-white/5 pt-3 mt-6">
        <p className="text-gray-600 text-xs">
          Diese Nachricht enth&auml;lt vertrauliche Informationen. Die
          unbefugte Weitergabe ist untersagt. Referenz: SV-SC-2025-48201
        </p>
      </div>
    </div>
  );
}

function Email3Content() {
  return (
    <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
      <div className="flex items-center gap-2 text-neon-blue font-bold text-base mb-4">
        <MapPin className="w-5 h-5" />
        {`Schl\u00FCssel\u00FCbergabe Saferoom`}
      </div>
      <p>Hallo,</p>
      <p>
        {`wie besprochen melde ich mich bez\u00FCglich der Schl\u00FCssel\u00FCbergabe. Alles ist vorbereitet.`}
      </p>
      <p>
        Der <strong>Saferoom</strong> steht f&uuml;r Ihr Vorhaben bereit. Wir
        haben alles so eingerichtet, wie Sie es angefordert haben. Der Raum ist
        vollst&auml;ndig ausgestattet und ab sofort zug&auml;nglich.
      </p>
      <div className="glass-card rounded-xl p-4 my-4 space-y-3">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">
          {`Details zur \u00DCbergabe`}
        </p>
        <div className="flex justify-between items-start">
          <span className="text-gray-400">Status:</span>
          <span className="text-green-400 font-semibold">{"\u2713"} Bereit</span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-gray-400">Datum:</span>
          <span>28.03.2026</span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-gray-400">Uhrzeit:</span>
          <span>11:00 Uhr</span>
        </div>
      </div>
      <p>
        {`Die \u00DCbergabe des Schl\u00FCssels findet am vereinbarten Ort statt. Bitte seien Sie p\u00FCnktlich und kommen Sie allein \u2013 wie abgesprochen.`}
      </p>
      <div className="bg-neon-blue/10 border border-neon-blue/20 rounded-xl p-4">
        <p className="text-neon-blue font-semibold mb-2">
          {"\uD83D\uDCCD"} {`\u00DCbergabeort`}
        </p>
        <p className="text-gray-300 text-sm mb-3">
          Den genauen Standort finden Sie unter folgendem Link:
        </p>
        <a
          href="https://maps.app.goo.gl/pLeQURCr7ch4YAro9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue px-4 py-2 rounded-lg transition-colors font-medium text-sm"
        >
          <MapPin className="w-4 h-4" />
          Standort auf Google Maps &ouml;ffnen
          <ExternalLink className="w-3 h-3" />
        </a>
        <p className="text-gray-500 text-xs mt-2 break-all">
          https://maps.app.goo.gl/pLeQURCr7ch4YAro9
        </p>
      </div>
      <p>
        {`Bitte best\u00E4tigen Sie den Erhalt dieser Nachricht nicht. Sie wissen, wie es l\u00E4uft. Je weniger Spuren, desto besser.`}
      </p>
      <p>
        {`Alles Weitere besprechen wir vor Ort.`}
      </p>
      <p>
        {"– K."}
      </p>
      <div className="border-t border-white/5 pt-3 mt-6">
        <p className="text-gray-600 text-xs italic">
          Diese Nachricht wird nach dem Lesen automatisch aus dem
          Serverprotokoll entfernt.
        </p>
      </div>
    </div>
  );
}

export function InboxPage({ navigate }: Props) {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [readEmails, setReadEmails] = useState<Set<number>>(new Set());

  const emails: MailItem[] = [
    {
      id: 1,
      from: "SafeVault GmbH \u2013 Bestellbest\u00E4tigung",
      subject: "Ihre Bestellung #NM-20251221-4782 wurde best\u00E4tigt",
      preview: "Vielen Dank f\u00FCr Ihren Kauf des Securitykoffer Modell \u201EFalsebottom\u201C...",
      date: "21.12.2025",
      time: "21:34",
      icon: <ShoppingBag className="w-5 h-5 text-green-400" />,
      content: <Email1Content />,
    },
    {
      id: 2,
      from: "SafeVault GmbH \u2013 Sicherheitsabteilung",
      subject: "Ihr Hochsicherheitscode wurde aktiviert",
      preview: "Ihr pers\u00F6nlicher Sicherheitscode f\u00FCr den Securitykoffer wurde gesetzt...",
      date: "22.12.2025",
      time: "09:15",
      icon: <KeyRound className="w-5 h-5 text-neon-pink" />,
      content: <Email2Content />,
    },
    {
      id: 3,
      from: "K. \u2013 Saferoom Services",
      subject: "Schl\u00FCssel\u00FCbergabe Saferoom",
      preview: "Der Saferoom steht f\u00FCr Ihr Vorhaben bereit. \u00DCbergabe des Schl\u00FCssels...",
      date: "28.03.2026",
      time: "11:00",
      icon: <MapPin className="w-5 h-5 text-neon-blue" />,
      content: <Email3Content />,
    },
  ];

  const handleEmailClick = (id: number) => {
    setSelectedEmail(id);
    setReadEmails((prev) => new Set(prev).add(id));
  };

  const selectedEmailData = emails.find((e) => e.id === selectedEmail);

  return (
    <div className="min-h-screen">
      <Navbar navigate={navigate} showActions={false} />

      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Inbox className="w-6 h-6 text-neon-pink" />
              <div>
                <h1 className="text-xl font-black">Posteingang</h1>
                <p className="text-xs text-gray-500">
                  schoolbunny06 &middot; {emails.length} Nachricht{emails.length !== 1 && "en"}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("landing")}
              className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Abmelden</span>
            </button>
          </div>

          {/* Email List or Detail */}
          {selectedEmail === null ? (
            <div className="glass-card rounded-2xl overflow-hidden animate-fade-in">
              {emails.map((email, index) => (
                <button
                  key={email.id}
                  onClick={() => handleEmailClick(email.id)}
                  className={`mail-row w-full p-4 sm:p-5 text-left cursor-pointer flex items-start gap-3 sm:gap-4 ${
                    index === 0 ? "rounded-t-2xl" : ""
                  } ${index === emails.length - 1 ? "rounded-b-2xl border-b-0" : ""}`}
                >
                  <div className="shrink-0 mt-1">
                    {readEmails.has(email.id) ? (
                      <MailOpen className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Mail className="w-5 h-5 text-neon-pink" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p
                        className={`text-sm truncate ${
                          readEmails.has(email.id)
                            ? "text-gray-400 font-medium"
                            : "text-white font-bold"
                        }`}
                      >
                        {email.from}
                      </p>
                      <div className="flex items-center gap-1 shrink-0 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{email.date}</span>
                      </div>
                    </div>
                    <p
                      className={`text-sm mb-1 truncate ${
                        readEmails.has(email.id)
                          ? "text-gray-400"
                          : "text-gray-200 font-semibold"
                      }`}
                    >
                      {email.subject}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {email.preview}
                    </p>
                  </div>
                  <div className="shrink-0 mt-1">{email.icon}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in">
              <button
                onClick={() => setSelectedEmail(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm cursor-pointer transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                {`Zur\u00FCck zum Posteingang`}
              </button>

              {selectedEmailData && (
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink/30 to-neon-purple/30 flex items-center justify-center shrink-0">
                        {selectedEmailData.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-white text-sm">
                          {selectedEmailData.from}
                        </p>
                        <p className="text-xs text-gray-500">
                          An: schoolbunny06
                        </p>
                      </div>
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-white mb-2">
                      {selectedEmailData.subject}
                    </h2>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>
                        {selectedEmailData.date}, {selectedEmailData.time} Uhr
                      </span>
                      <span className="ml-2">{"\uD83D\uDD12"} Verschl&uuml;sselt</span>
                    </div>
                  </div>
                  {selectedEmailData.content}
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-xs">
              <Shield className="w-3 h-3 inline mr-1" />
              Alle Nachrichten sind Ende-zu-Ende verschl&uuml;sselt &middot; naughty-mail.de
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
