import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1760894492871-217f4e4eafdd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXN0YXVyYW50JTIwYW1iaWFuY2V8ZW58MHwwfHx8MTc2MTczMDQzM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
          alt="Restaurant ambiance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[78vh] items-center py-20">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Seasonal flavors. Crafted with soul.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/80"
            >
              At Solstice Bistro, we celebrate local ingredients with a rotating menu inspired by the rhythm of the seasons.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                View Menu
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20 focus:outline-none"
              >
                Call to Reserve
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md"
            >
              <div className="rounded-xl bg-white/10 p-4 text-center ring-1 ring-white/20">
                <p className="text-2xl font-bold">4:30–10</p>
                <p className="text-xs uppercase tracking-wide text-white/80">Dinner</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 text-center ring-1 ring-white/20">
                <p className="text-2xl font-bold">Wed–Sun</p>
                <p className="text-xs uppercase tracking-wide text-white/80">Open</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 text-center ring-1 ring-white/20">
                <p className="text-2xl font-bold">12 Tables</p>
                <p className="text-xs uppercase tracking-wide text-white/80">Intimate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <svg className="absolute -bottom-1 left-0 right-0" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60C240 90 480 0 720 30C960 60 1200 120 1440 60V90H0V60Z" fill="white" />
      </svg>
    </section>
  );
};

export default Hero;
