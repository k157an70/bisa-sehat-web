const services = [
    {
        title: "Occupational Managed Care",
        description:
            "Layanan kesehatan kerja terintegrasi untuk meningkatkan produktivitas dan kesehatan karyawan perusahaan.",
    },
    {
        title: "Medical Check Up Perusahaan",
        description:
            "Pemeriksaan kesehatan karyawan secara profesional dan terjadwal untuk kebutuhan corporate.",
    },
    {
        title: "Homecare",
        description:
            "Layanan kesehatan langsung ke rumah dengan tenaga medis profesional dan respons cepat.",
    },
    {
        title: "Return To Work Program",
        description:
            "Pendampingan pemulihan dan kesiapan kerja karyawan pasca sakit atau cedera.",
    },
    {
        title: "Monitoring Kesehatan",
        description:
            "Pemantauan kondisi kesehatan karyawan secara berkala dan terintegrasi.",
    },
    {
        title: "Corporate Healthcare",
        description:
            "Solusi healthcare menyeluruh untuk perusahaan modern dengan pendekatan profesional.",
    },
];

export default function ServicesSection() {
    return (
        <section id="layanan" className="section-padding bg-white">

            <div className="container-custom">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                        Layanan Kami
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                        Solusi Healthcare untuk Perusahaan & Individu
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        Kami membantu perusahaan dan individu melalui layanan
                        healthcare profesional, terintegrasi, dan terpercaya.
                    </p>

                </div>

                {/* SERVICES GRID */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
                        >

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                                <div className="h-6 w-6 rounded-full bg-sky-600" />

                            </div>

                            <h3 className="text-xl font-semibold text-slate-900">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-slate-600">
                                {service.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}