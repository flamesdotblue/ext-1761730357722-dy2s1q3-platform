import React, { useState } from 'react';
import { Utensils, Phone, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
            <div className="p-2 rounded-lg bg-emerald-600 text-white">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="tracking-tight">Solstice Bistro</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Phone className="h-4 w-4" />
              Reserve
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-base font-semibold text-white hover:bg-emerald-700"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" /> Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
