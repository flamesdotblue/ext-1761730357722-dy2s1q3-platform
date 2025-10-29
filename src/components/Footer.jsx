import React from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-xl font-bold">Solstice Bistro</h4>
            <p className="mt-3 text-neutral-600">
              Seasonal, local, and lovingly prepared. Join us for a memorable evening in the heart of the city.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-neutral-900">Visit Us</h5>
            <div className="mt-4 space-y-3 text-neutral-700">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-neutral-500" /> 123 Harvest Lane, Riverfront District</p>
              <p className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-neutral-500" /> Wed–Sun: 4:30pm – 10:00pm</p>
              <p className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-neutral-500" /> <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a></p>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-neutral-900">Reservations</h5>
            <p className="mt-4 text-neutral-600">We accept a limited number of bookings each evening. For parties of 6+, please call.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col gap-3"
            >
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
                <input
                  type="time"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Request Table
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Solstice Bistro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-neutral-700">Menu</a>
            <a href="#about" className="hover:text-neutral-700">About</a>
            <a href="#contact" className="hover:text-neutral-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
