import { Linkedin, Mail } from "lucide-react";

export default function TrainersPage() {
    const trainers = [
        {
            name: "Samantha",
            role: "Inducción / Gestión del Tiempo",
            desc: "Experta en productividad y cultura organizacional. Samantha te guiará en los primeros pasos dentro de Goya Europa.",
            color: "bg-orange-100 text-orange-600",
            avatar: "👩‍💼"
        },
        {
            name: "Aurora",
            role: "PNL / Inteligencia Emocional",
            desc: "Psicóloga especializada en ventas. Aurora te enseñará a conectar emocionalmente con tus clientes y gestionar situaciones difíciles.",
            color: "bg-purple-100 text-purple-600",
            avatar: "👩‍🏫"
        },
        {
            name: "Bruno",
            role: "Coaching / Modelo de Gestión",
            desc: "Coach ejecutivo certificado. Bruno te ayudará a desarrollar tu liderazgo y a optimizar tus procesos comerciales.",
            color: "bg-blue-100 text-blue-600",
            avatar: "👨‍💼"
        },
        {
            name: "Avek",
            role: "Protocolos / Negociación",
            desc: "Consultor internacional en estrategia de negocios. Avek te mostrará las claves para cerrar acuerdos exitosos.",
            color: "bg-emerald-100 text-emerald-600",
            avatar: "👨‍🏫"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-goya-blue mb-4">Nuestro Equipo de Formadores</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Conoce a los expertos (y sus avatares digitales) que te acompañarán en tu desarrollo profesional.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {trainers.map((trainer, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center p-8">
                        <div className={`w-32 h-32 rounded-full ${trainer.color} flex items-center justify-center text-6xl mb-6 shadow-inner`}>
                            {trainer.avatar}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{trainer.name}</h3>
                        <span className="inline-block bg-gray-100 text-goya-blue text-xs font-bold px-3 py-1 rounded-full mb-4">
                            {trainer.role}
                        </span>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {trainer.desc}
                        </p>

                        <div className="flex space-x-4 mt-auto">
                            <button className="text-gray-400 hover:text-goya-blue transition-colors">
                                <Linkedin size={20} />
                            </button>
                            <button className="text-gray-400 hover:text-goya-blue transition-colors">
                                <Mail size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
