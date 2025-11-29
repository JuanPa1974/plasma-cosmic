import { Target, TrendingUp, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-goya-blue mb-4">Sobre el Proyecto FORMA</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transformando la capacitación comercial en Goya Europa hacia un modelo inmersivo, digital y orientado a resultados.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                {/* Text Content */}
                <div>
                    <h2 className="text-2xl font-bold text-goya-blue mb-6 border-l-4 border-goya-gold pl-4">
                        Plan de Formación 2026
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        El Plan de Formación 2026 impulsa un modelo de desarrollo comercial inmersivo e interactivo, que integra cultura corporativa, metodología y competencias con tecnología de vanguardia.
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Nuestro objetivo es estandarizar la excelencia en todos los niveles de la organización, asegurando que cada miembro del equipo cuente con las herramientas necesarias para superar los desafíos del mercado actual.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <h3 className="font-bold text-goya-blue mb-2">Visión Estratégica</h3>
                        <p className="text-sm text-gray-600">
                            Convertir a Goya Europa en el referente de capacitación comercial del sector, utilizando la innovación tecnológica para potenciar el talento humano.
                        </p>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="bg-gray-200 rounded-xl h-80 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                    <div className="w-20 h-20 mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🖼️</span>
                    </div>
                    <span className="font-medium">Esquema del Proyecto FORMA</span>
                    <span className="text-xs mt-2">(Subir gráfico aquí)</span>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-goya-blue mb-12">Beneficios para el Equipo Comercial</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Target className="w-8 h-8 text-white" />,
                            title: "Enfoque Práctico",
                            desc: "Aprendizaje basado en situaciones reales y casos de éxito."
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8 text-white" />,
                            title: "Mejora Continua",
                            desc: "Herramientas para la autoevaluación y el crecimiento constante."
                        },
                        {
                            icon: <Users className="w-8 h-8 text-white" />,
                            title: "Cultura Unificada",
                            desc: "Alineación de valores y metodologías en toda la organización."
                        },
                        {
                            icon: <Lightbulb className="w-8 h-8 text-white" />,
                            title: "Innovación",
                            desc: "Uso de IA y plataformas digitales para un aprendizaje ágil."
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-goya-blue rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
