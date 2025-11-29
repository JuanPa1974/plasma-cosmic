import { Code, Cpu, Palette, Video } from "lucide-react";

export default function CreditsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-goya-blue text-white p-10 text-center">
                    <h1 className="text-3xl font-bold mb-2">Créditos del Proyecto</h1>
                    <p className="text-blue-200">Reconocimiento al equipo y tecnologías</p>
                </div>

                <div className="p-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Herramientas Utilizadas</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "HeyGen", icon: <Video className="w-6 h-6" />, desc: "Avatares de Video" },
                                { name: "Mixboard", icon: <Palette className="w-6 h-6" />, desc: "Diseño Gráfico" },
                                { name: "Google Antigravity", icon: <Code className="w-6 h-6" />, desc: "Desarrollo IA" },
                                { name: "IA Generativa", icon: <Cpu className="w-6 h-6" />, desc: "Contenidos" },
                            ].map((tool, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                                    <div className="text-goya-blue mb-2">{tool.icon}</div>
                                    <span className="font-bold text-gray-800 text-sm">{tool.name}</span>
                                    <span className="text-xs text-gray-500">{tool.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Agradecimientos</h2>
                        <p className="text-gray-600 text-center leading-relaxed mb-8">
                            Este proyecto ha sido posible gracias a la colaboración del equipo de Dirección General de Goya Europa y el departamento de Formación y Desarrollo.
                        </p>

                        <div className="flex justify-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Logo Placeholders */}
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">LOGO 1</div>
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">LOGO 2</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-medium">
                        Uso interno – Maqueta de presentación • {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}
