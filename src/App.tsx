import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NiceTryPage } from "./pages/NiceTryPage";
import { SecurityQuestionsPage } from "./pages/SecurityQuestionsPage";
import { InboxPage } from "./pages/InboxPage";

export type Page =
  | "landing"
  | "register"
  | "login"
  | "nicetry"
  | "security"
  | "inbox";

export function App() {
  const [page, setPage] = useState<Page>("landing");

  const navigate = (p: Page) => {
    window.scrollTo(0, 0);
    setPage(p);
  };

  return (
    <div className="min-h-screen">
      {page === "landing" && <LandingPage navigate={navigate} />}
      {page === "register" && <RegisterPage navigate={navigate} />}
      {page === "login" && <LoginPage navigate={navigate} />}
      {page === "nicetry" && <NiceTryPage navigate={navigate} />}
      {page === "security" && <SecurityQuestionsPage navigate={navigate} />}
      {page === "inbox" && <InboxPage navigate={navigate} />}
    </div>
  );
}
