"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { LogoFull } from "@/components/ui/Logo";
import { useCart } from "@/lib/cart/CartContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoFull />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-blue"
            aria-label={`Shopping cart, ${itemCount} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          <Link
            href="/shop"
            className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md"
          >
            Shop Now
          </Link>
        </nav>

        {/* Mobile: Cart + Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openCart}
            className="relative flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={`Shopping cart, ${itemCount} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <nav className="flex flex-col gap-3 px-4 pb-6 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-base font-semibold text-white transition-all hover:bg-brand-blue-dark"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
