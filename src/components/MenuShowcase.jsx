import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'Heirloom Tomato Burrata',
    price: 15,
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2070&auto=format&fit=crop',
    desc: 'Basil oil, aged balsamic, sourdough crumble',
    tag: 'Starter',
  },
  {
    name: 'Wild Mushroom Risotto',
    price: 24,
    img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2070&auto=format&fit=crop',
    desc: 'Parmesan, truffle, garden herbs',
    tag: 'Mains',
  },
  {
    name: 'Citrus Cured Salmon',
    price: 21,
    img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2069&auto=format&fit=crop',
    desc: 'Fennel salad, yuzu creme, rye crisp',
    tag: 'Mains',
  },
  {
    name: 'Charred Broccolini',
    price: 12,
    img: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=2069&auto=format&fit=crop',
    desc: 'Lemon, chili, almond dukkah',
    tag: 'Sides',
  },
  {
    name: 'Grilled Lamb Chops',
    price: 32,
    img: 'https://images.unsplash.com/photo-1604908554007-141ecf36d0d6?q=80&w=2070&auto=format&fit=crop',
    desc: 'Rosemary jus, smoked eggplant, mint',
    tag: 'Mains',
  },
  {
    name: 'Dark Chocolate Torte',
    price: 11,
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2069&auto=format&fit=crop',
    desc: 'Sea salt, creme fraiche, cocoa nib',
    tag: 'Dessert',
  },
];

const MenuShowcase = () => {
  return (
    <section id="menu" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900"
          >
            This Week's Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-2xl text-neutral-600"
          >
            A tasting of seasonal favorites from our kitchen. Menus rotate often based on local harvests.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-black/5">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{item.name}</h3>
                  <span className="shrink-0 rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold tracking-wide text-white">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="about" className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 bg-white p-8"
          >
            <h3 className="text-2xl font-bold">Our Philosophy</h3>
            <p className="mt-3 text-neutral-600">
              We partner with nearby farms and fisheries to let exceptional ingredients shine. Our small dining room keeps the
              experience intimate, while our open kitchen brings you closer to the craft.
            </p>
            <p className="mt-3 text-neutral-600">
              Expect bright flavors, wood-fired accents, and a wine list focused on low-intervention producers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2069&auto=format&fit=crop"
              alt="Chefs plating in the kitchen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;
