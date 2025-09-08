"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const nav = {
    product: [
      { name: "Trip Planner", href: "#" },
      { name: "Destinations", href: "#" },
      { name: "Itineraries", href: "#" },
      { name: "Budget Tools", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-[#f8f9fa] text-black">
      {/* subtle top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Brand + Newsletter */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
                <span className="text-lg">✈️</span>
              </div>
              <span className="text-xl font-semibold">TripSketcher</span>
            </div>
            <p className="mt-3 text-slate-400">
              Your ultimate travel companion—plan smarter, travel better.
            </p>

            
            <p className="mt-2 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>

            {/* Socials */}
            <div className="mt-6 flex gap-4">
              {[
                { label: "Twitter/X", href: "#", icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.244 2H21l-6.46 7.39L22.5 22h-6.91l-4.52-5.94L5.77 22H3l6.93-7.93L1.5 2h6.91l4.12 5.42L18.244 2Zm-1.21 18h1.86L8.96 4h-1.86l9.924 16Z"/></svg>
                )},
                { label: "Instagram", href: "#", icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6-1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"/></svg>
                )},
                { label: "LinkedIn", href: "#", icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5ZM3 8h4v13H3Zm7 0h3.8v1.8h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.06V21H18v-5.3c0-1.26-.02-2.88-1.76-2.88-1.77 0-2.04 1.38-2.04 2.79V21h-4Z"/></svg>
                )},
                { label: "GitHub", href: "#", icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12.26c0 5.22 3.39 9.64 8.1 11.2.6.12.82-.27.82-.58 0-.28-.01-1.03-.02-2.02-3.3.73-4-1.6-4-1.6-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.76.08-.76 1.21.09 1.85 1.27 1.85 1.27 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.33.76-1.64-2.64-.31-5.42-1.36-5.42-6.04 0-1.33.47-2.43 1.26-3.29-.13-.31-.55-1.56.12-3.25 0 0 1.03-.34 3.39 1.26a11.7 11.7 0 0 1 6.18 0c2.36-1.6 3.39-1.26 3.39-1.26.67 1.69.25 2.94.12 3.25.79.86 1.26 1.96 1.26 3.29 0 4.69-2.79 5.72-5.45 6.03.43.38.82 1.11.82 2.24 0 1.62-.02 2.93-.02 3.33 0 .31.22.7.83.58A11.5 11.5 0 0 0 23.5 12.26 11.5 11.5 0 0 0 12 .5Z"/></svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-gray-200 hover:text-gray-600 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-8">
            {Object.entries(nav).map(([section, links]) => (
              <nav key={section}>
                <h4 className="text-sm font-semibold tracking-wide text-gray-400 mb-3 capitalize">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l.name}>
                      <a
                        href={l.href}
                        className="text-sm text-slate-400 hover:text-gray-600 transition"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} <span className="text-slate-300">TripSketcher</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
