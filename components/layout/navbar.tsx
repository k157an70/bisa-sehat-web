"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">

            <div className="container-custom">

                <div className="flex h-20 items-center justify-between">

                    {/* LOGO */}
                    <div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            BISA SEHAT
                        </span>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden items-center gap-8 md:flex">

                        <a
                            href="#beranda"
                            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                        >
                            Beranda
                        </a>

                        <a
                            href="#layanan"
                            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                        >
                            Layanan
                        </a>

                        <a
                            href="#tentang"
                            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                        >
                            Tentang
                        </a>

                        <a
                            href="#artikel"
                            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                        >
                            Artikel
                        </a>

                        <a
                            href="#kontak"
                            className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
                        >
                            Kontak
                        </a>

                    </nav>

                    {/* DESKTOP CTA */}
                    <div className="hidden md:block">

                        <button className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
                            Konsultasi
                        </button>

                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center rounded-xl border border-slate-200 p-2 md:hidden"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5 text-slate-700" />
                        ) : (
                            <Menu className="h-5 w-5 text-slate-700" />
                        )}
                    </button>

                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="border-t border-slate-200 py-6 md:hidden">

                        <nav className="flex flex-col gap-5">

                            <a
                                href="#beranda"
                                className="text-sm font-medium text-slate-700"
                            >
                                Beranda
                            </a>

                            <a
                                href="#layanan"
                                className="text-sm font-medium text-slate-700"
                            >
                                Layanan
                            </a>

                            <a
                                href="#tentang"
                                className="text-sm font-medium text-slate-700"
                            >
                                Tentang
                            </a>

                            <a
                                href="#artikel"
                                className="text-sm font-medium text-slate-700"
                            >
                                Artikel
                            </a>

                            <a
                                href="#kontak"
                                className="text-sm font-medium text-slate-700"
                            >
                                Kontak
                            </a>

                            <button className="mt-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white">
                                Konsultasi
                            </button>

                        </nav>

                    </div>
                )}

            </div>

        </header>
    );
}