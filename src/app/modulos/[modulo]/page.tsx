import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, CheckCircle } from "lucide-react";

// This is a mockup, so we'll define static data for the "coaching" module
// and generic data for others.
const getModuleData = (slug: string) => {
    if (slug === "coaching") {
        return {
            title: "Coaching",
            description: "El coaching es una herramienta fundamental para el desarrollo de equipos de alto rendimiento. En este módulo aprenderás a identificar fortalezas, gestionar áreas de mejora y potenciar el liderazgo personal y colectivo.",
            imagePlaceholder: "🎯",
            chapters: [
                { id: "escena-1", title: "Escena 1: La primera sesión", duration: "10 min", type: "video" },
                { id: "escena-2", title: "Escena 2: Feedback efectivo", duration: "15 min", type: "video", locked: true },
                { id: "evaluacion", title: "Evaluación de conocimientos", duration: "20 min", type: "quiz", locked: true },
            ]
        };
    }

    // Generic fallback for other modules
    return {
        title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
        description: "Contenido detallado de este módulo de formación. Aquí encontrarás videos, lecturas y ejercicios prácticos para dominar esta competencia clave del Proyecto FORMA.",
        imagePlaceholder: "📚",
        chapters: [
            { id: "capitulo-1", title: "Introducción al tema", duration: "5 min", type: "video" },
            { id: "capitulo-2", title: "Conceptos fundamentales", duration: "12 min", type: "video", locked: true },
            { id: "evaluacion", title: "Evaluación final", duration: "15 min", type: "quiz", locked: true },
        ]
    };
};

export default async function ModuleDetailPage({ params }: { params: Promise<{ modulo: string }> }) {
    const { modulo } = await params;
    const data = getModuleData(modulo);

    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/modulos" className="inline-flex items-center text-gray-500 hover:text-goya-blue mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Módulos
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Header Banner */}
                <div className="bg-goya-blue text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                        <div className="w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl border border-white/30 shadow-inner">
                            {data.imagePlaceholder}
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
                            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content List */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Contenido del Módulo</h2>

                    <div className="space-y-4">
                        {data.chapters.map((chapter, index) => (
                            <div key={index} className={`flex items-center p-4 rounded-xl border ${chapter.locked ? 'bg-gray-50 border-gray-100 opacity-70' : 'bg-white border-gray-200 hover:border-goya-blue hover:shadow-md transition-all'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${chapter.locked ? 'bg-gray-200 text-gray-400' : 'bg-blue-50 text-goya-blue'}`}>
                                    {chapter.type === 'video' ? <PlayCircle size={20} /> : <FileText size={20} />}
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-semibold text-gray-800">{chapter.title}</h3>
                                    <span className="text-xs text-gray-500 flex items-center mt-1">
                                        <ClockIcon className="w-3 h-3 mr-1" /> {chapter.duration}
                                    </span>
                                </div>

                                <div>
                                    {chapter.locked ? (
                                        <span className="text-xs font-medium bg-gray-200 text-gray-500 px-3 py-1 rounded-full">Bloqueado</span>
                                    ) : (
                                        <Link
                                            href={modulo === 'coaching' && chapter.id === 'escena-1' ? '/modulos/coaching/escena-1' : '#'}
                                            className="inline-flex items-center text-sm font-bold text-white bg-goya-blue hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
                                        >
                                            {chapter.type === 'video' ? 'Ver Video' : 'Iniciar'}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
