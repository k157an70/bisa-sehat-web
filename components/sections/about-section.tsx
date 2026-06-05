const stats = [
    {
        value: "500+",
        label: "MCU Perusahaan",
    },
    {
        value: "100+",
        label: "Corporate Partner",
    },
    {
        value: "24/7",
        label: "Healthcare Support",
    },
];

export default function AboutSection() {
    return (
        <section id="tentang" className="section-padding bg-slate-50">

            <div className="container-custom">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}
                    <div>

                        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                            Tentang BISA SEHAT
                        </span>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Partner Healthcare Profesional
                            untuk Perusahaan Modern
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            BISA SEHAT hadir sebagai solusi healthcare terintegrasi
                            untuk perusahaan dan individu melalui layanan profesional,
                            cepat, dan terpercaya.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            Kami membantu perusahaan dalam pengelolaan kesehatan
                            karyawan mulai dari medical check up, occupational health,
                            hingga monitoring kesehatan secara menyeluruh.
                        </p>

                        {/* STATS */}
                        <div className="mt-10 grid grid-cols-3 gap-6">

                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-3xl bg-white p-6 shadow-sm"
                                >

                                    <h3 className="text-3xl font-bold text-sky-600">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-600">
                                        {item.label}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div>

                        <div className="rounded-[32px] bg-white p-8 shadow-sm">

                            <div className="space-y-6">

                                <div className="rounded-2xl border border-slate-100 p-6">

                                    <h3 className="text-lg font-semibold text-slate-900">
                                        Professional Healthcare Team
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-slate-600">
                                        Tim profesional dengan pengalaman dalam layanan
                                        healthcare corporate dan kesehatan kerja.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-slate-100 p-6">

                                    <h3 className="text-lg font-semibold text-slate-900">
                                        Fast & Integrated Service
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-slate-600">
                                        Sistem layanan cepat dan terintegrasi untuk mendukung
                                        kebutuhan healthcare perusahaan modern.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-slate-100 p-6">

                                    <h3 className="text-lg font-semibold text-slate-900">
                                        Trusted Corporate Healthcare
                                    </h3>

                                    <p className="mt-2 leading-relaxed text-slate-600">
                                        Fokus pada kualitas layanan dan hubungan jangka panjang
                                        bersama partner perusahaan.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}