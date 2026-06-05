import Image from "next/image";
const articles = [
    {
        title: "Pentingnya Medical Check Up untuk Karyawan Perusahaan",
        description:
            "Medical check up membantu perusahaan dalam menjaga kesehatan dan produktivitas karyawan secara optimal.",
        date: "12 Juni 2026",
        image: "/images/articles/img1.jpg",
    },
    {
        title: "Corporate Healthcare Modern untuk Perusahaan",
        description:
            "Solusi healthcare modern membantu perusahaan meningkatkan efisiensi dan kesejahteraan karyawan.",
        date: "10 Juni 2026",
        image: "/images/articles/img2.jpg",
    },
    {
        title: "Tips Menjaga Produktivitas dan Kesehatan Karyawan",
        description:
            "Lingkungan kerja sehat berperan penting dalam meningkatkan performa dan kualitas kerja tim.",
        date: "8 Juni 2026",
        image: "/images/articles/img3-new.jpg",
    },
];

export default function ArticlesSection() {
    return (
        <section
            id="artikel"
            className="section-padding bg-slate-50"
        >

            <div className="container-custom">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
                        Artikel Kesehatan
                    </span>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                        Insight & Edukasi Healthcare
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                        Informasi kesehatan, corporate healthcare, dan medical check up
                        untuk perusahaan modern.
                    </p>

                </div>

                {/* ARTICLES */}
                <div className="mt-16 grid gap-6 lg:grid-cols-3">

                    {articles.map((article) => (
                        <article
                            key={article.title}
                            className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* IMAGE */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                            </div>

                            {/* CONTENT */}
                            <div className="p-8">

                                <p className="text-sm text-slate-500">
                                    {article.date}
                                </p>

                                <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900">
                                    {article.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-slate-600">
                                    {article.description}
                                </p>

                                <button className="mt-6 text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                                    Baca Selengkapnya →
                                </button>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}