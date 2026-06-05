import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="beranda" className="section-padding bg-linear-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              Corporate Healthcare Solution
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 md:text-6xl">
              Solusi Healthcare Terintegrasi
              untuk Perusahaan Modern
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              BISA SEHAT membantu perusahaan dalam medical check up,
              monitoring kesehatan, homecare, dan corporate healthcare
              secara profesional dan terintegrasi.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

              <button className="rounded-2xl bg-sky-600 px-7 py-3.5 font-medium text-white transition hover:bg-sky-700">
                Konsultasi Gratis
              </button>

              <button className="rounded-2xl border border-slate-300 bg-white px-7 py-3.5 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                WhatsApp
              </button>

            </div>

            {/* TRUST BADGES */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 lg:justify-start">
              <span>✓ Professional Team</span>
              <span>✓ Corporate Healthcare</span>
              <span>✓ Fast Response</span>
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="relative">

            <div className="relative aspect-square overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/hero-healthcare.jpg"
                alt="Healthcare Professional"
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute left-6 top-6 rounded-2xl bg-white p-4 shadow-xl">

              <p className="text-sm font-semibold text-slate-900">
                500+ MCU Perusahaan
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Trusted healthcare partner
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}