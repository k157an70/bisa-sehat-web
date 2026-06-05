import { MessageCircleMore } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
        >

            <MessageCircleMore className="h-6 w-6" />

            <span className="hidden text-sm font-medium sm:block">
                WhatsApp Kami
            </span>

        </a>
    );
}