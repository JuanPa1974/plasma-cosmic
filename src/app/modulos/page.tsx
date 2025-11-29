import Link from "next/link";
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
            </div>
        </div>
    );
}
