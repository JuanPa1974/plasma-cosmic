import Link from "next/link";
<<<<<<< HEAD
import { Book, Briefcase, MessageCircle, Mic, Clock, Heart, Users, Zap } from "lucide-react";

export default function ModulesPage() {
    const modules = [
        {
            id: "induccion",
            title: "Inducción Goya Europa",
            desc: "Conoce nuestra historia, valores y estructura organizacional.",
            icon: <Book className="w-8 h-8" />,
            color: "bg-blue-500"
        },
        {
            id: "modelo-gestion",
            title: "Modelo de Gestión Comercial",
            desc: "Estructura y procesos para una gestión eficiente.",
            icon: <Briefcase className="w-8 h-8" />,
            color: "bg-indigo-500"
        },
        {
            id: "protocolos",
            title: "Protocolos Comerciales",
            desc: "Estándares de atención y servicio al cliente.",
            icon: <MessageCircle className="w-8 h-8" />,
            color: "bg-cyan-500"
        },
        {
            id: "coaching",
            title: "Coaching",
            desc: "Desarrollo de habilidades y liderazgo de equipos.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-teal-500"
        },
        {
            id: "pnl",
            title: "PNL – Programación Neurolingüística",
            desc: "Técnicas para mejorar la comunicación e influencia.",
            icon: <Zap className="w-8 h-8" />,
            color: "bg-purple-500"
        },
        {
            id: "gestion-tiempo",
            title: "Gestión del Tiempo",
            desc: "Maximiza tu productividad y organización diaria.",
            icon: <Clock className="w-8 h-8" />,
            color: "bg-orange-500"
        },
        {
            id: "inteligencia-emocional",
            title: "Inteligencia Emocional",
            desc: "Gestión de emociones para relaciones comerciales exitosas.",
            icon: <Heart className="w-8 h-8" />,
            color: "bg-pink-500"
        },
        {
            id: "negociacion",
            title: "Técnicas de Negociación",
            desc: "Estrategias para cerrar acuerdos ganar-ganar.",
            icon: <Mic className="w-8 h-8" />,
            color: "bg-emerald-500"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-goya-blue mb-4">Módulos de Formación</h1>
                <p className="text-xl text-gray-600">
                    Explora nuestro catálogo de cursos diseñados para potenciar tu perfil profesional.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {modules.map((module) => (
                    <div key={module.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full border border-gray-100">
                        {/* Card Header with Icon Placeholder */}
                        <div className={`h-32 ${module.color} flex items-center justify-center text-white relative`}>
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10 bg-white/20 p-4 rounded-full backdrop-blur-sm">
                                {module.icon}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14">
                                {module.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow">
                                {module.desc}
                            </p>

                            <Link
                                href={`/modulos/${module.id}`}
                                className="w-full block text-center bg-gray-50 hover:bg-goya-blue hover:text-white text-goya-blue font-semibold py-2 rounded-lg transition-colors border border-gray-200 hover:border-goya-blue"
                            >
                                Ver contenido
                            </Link>
                        </div>
                    </div>
                ))}
=======
import { ArrowLeft, CheckCircle, MessageSquare, Share2 } from "lucide-react";

export default function VideoScenePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb / Back Navigation */}
            <div className="mb-6">
                <Link href="/modulos/coaching" className="inline-flex items-center text-gray-500 hover:text-goya-blue transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al módulo Coaching
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column (Video) */}
                <div className="lg:col-span-2">
                    <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video relative group">
                        {/* VIDEO REAL */}
                        <video
                            src="/videos/coaching-capitulo-1-escena-1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    <div className="mt-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Coaching – Escena 1: La primera sesión
                        </h1>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                            <span>10:45 min</span>
                            <span>•</span>
                            <span>Publicado: Nov 2025</span>
                            <span>•</span>
                            <span className="text-goya-blue font-medium">Nivel Intermedio</span>
                        </div>

                        <div className="prose max-w-none text-gray-700">
                            <h3 className="text-lg font-bold text-goya-blue mb-2">Objetivo del Capítulo</h3>
                            <p className="mb-4">
                                En esta escena, observaremos cómo establecer el "Rapport" inicial con un colaborador. Analizaremos el lenguaje no verbal, la escucha activa y las preguntas poderosas que abren la conversación hacia un espacio de confianza.
                            </p>
                            <h3 className="text-lg font-bold text-goya-blue mb-2">Puntos Clave a Observar</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Postura corporal abierta y receptiva.</li>
                                <li>Validación de las emociones del colaborador.</li>
                                <li>Establecimiento claro del objetivo de la sesión.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sidebar Column (Actions & Next Steps) */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4">Acciones</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center space-x-2 bg-goya-blue hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                                <CheckCircle className="w-5 h-5" />
                                <span>Realizar Evaluación</span>
                            </button>
                            <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors">
                                <MessageSquare className="w-5 h-5" />
                                <span>Dejar un comentario</span>
                            </button>
                            <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span>Compartir</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-4">Siguiente Capítulo</h3>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video bg-gray-300 rounded-lg mb-3 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white">
                                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-bold text-gray-800 group-hover:text-goya-blue transition-colors">Escena 2: Feedback efectivo</h4>
                            <p className="text-xs text-gray-500 mt-1">15:00 min</p>
                        </div>
                    </div>
                </div>
>>>>>>> a78773ea2036374dbe852cceb3eac0d8363d2e39
            </div>
        </div>
    );
}
