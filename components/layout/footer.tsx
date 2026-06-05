export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="container-custom py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}
                    <div>

                        <h3 className="text-xl font-bold text-slate-900">
                            BISA SEHAT
                        </h3>

                        <p className="mt-4 leading-relaxed text-slate-600">
                            Solusi healthcare profesional untuk perusahaan dan individu
                            melalui layanan yang cepat, terpercaya, dan terintegrasi.
                        </p>

                    </div>

                    {/* LAYANAN */}
                    <div>

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Layanan
                        </h4>

                        <ul className="mt-5 space-y-3 text-slate-600">

                            <li>Medical Check Up</li>

                            <li>Homecare</li>

                            <li>Occupational Health</li>

                            <li>Monitoring Kesehatan</li>

                        </ul>

                    </div>

                    {/* COMPANY */}
                    <div>

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Perusahaan
                        </h4>

                        <ul className="mt-5 space-y-3 text-slate-600">

                            <li>Tentang Kami</li>

                            <li>Layanan</li>

                            <li>Artikel</li>

                            <li>Kontak</li>

                        </ul>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Kontak
                        </h4>

                        <ul className="mt-5 space-y-3 text-slate-600">

                            <li>hello@bisasehat.id</li>

                            <li>+62 812 3456 7890</li>

                            <li>Indonesia</li>

                        </ul>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-16 border-t border-slate-200 pt-6">

                    <p className="text-sm text-slate-500">
                        © 2026 BISA SEHAT. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}