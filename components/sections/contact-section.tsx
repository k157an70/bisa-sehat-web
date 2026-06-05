export default function ContactSection() {
    return (
        <section
            id="kontak"
            className="section-padding bg-sky-600"
        >

            <div className="container-custom">

                <div className="mx-auto max-w-4xl text-center">

                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
                        Konsultasi Healthcare
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                        Siap Mendukung Kesehatan
                        Perusahaan Anda
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-sky-100">
                        Konsultasikan kebutuhan healthcare perusahaan Anda bersama
                        tim profesional BISA SEHAT untuk solusi yang cepat,
                        terpercaya, dan terintegrasi.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            className="rounded-2xl bg-white px-7 py-3.5 font-medium text-sky-700 transition hover:bg-slate-100"
                        >
                            WhatsApp Kami
                        </a>

                        <a
                            href="mailto:hello@bisasehat.id"
                            className="rounded-2xl border border-white/30 px-7 py-3.5 font-medium text-white transition hover:bg-white/10"
                        >
                            Email Perusahaan
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}