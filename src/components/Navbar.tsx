import { Shield, LogIn, UserPlus } from "lucide-react";
import type { Page } from "../App";

interface NavbarProps {
  navigate: (page: Page) => void;
  showActions?: boolean;
}

export function Navbar({ navigate, showActions = true }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-b-pink-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate("landing")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Shield className="w-8 h-8 text-neon-pink" />
            <span className="text-xl font-bold gradient-text">
              naughty mail
            </span>
          </button>
          {showActions && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("register")}
                className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Registrieren</span>
              </button>
              <button
                onClick={() => navigate("login")}
                className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer text-white"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
