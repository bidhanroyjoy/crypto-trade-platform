"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Wallet, BarChart2, LogOut, Store } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/markets", icon: BarChart2, label: "Markets" },
  { href: "/trade", icon: Store, label: "Trade" },
  { href: "/wallet", icon: Wallet, label: "Wallet" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-background border-r p-4 hidden md:block">
      <div className="text-xl font-bold mb-6">CryptoTrade</div>
      <nav className="space-y-2">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md hover:bg-muted transition",
              pathname.startsWith(href) && "bg-muted"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
        <button className="flex items-center gap-3 p-2 text-red-500 hover:text-red-600 mt-4">
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </nav>
    </aside>
  );
}
