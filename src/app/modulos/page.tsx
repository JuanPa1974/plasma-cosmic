import Link from "next/link";
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
            </div>
        </div>
    );
}
