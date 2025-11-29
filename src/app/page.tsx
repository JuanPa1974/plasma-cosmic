import Link from "next/link";
import { ArrowRight, Users, BookOpen, UserCheck, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-goya-blue to-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-goya-gold blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            {/* Logo Placeholder */}
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <span className="text-2xl font-bold">LOGO</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Proyecto FORMA
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-blue-100 mb-8">
            Plataforma de Formación Comercial
          </h2>

          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-10">
            <p className="text-lg font-medium tracking-wider">
              Fortalecer. Optimizar. Replicar. Mejorar. Actuar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/proyecto-forma"
              className="bg-goya-gold hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Conocer el Proyecto
            </Link>
            <Link
              href="/modulos"
              className="bg-white text-goya-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Ir a Módulos
            </Link>
          </div>
        </div>
      </section>

      {/* FORMA Acronym Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-goya-blue mb-12">
            Metodología F.O.R.M.A.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { letter: "F", title: "Fortalecer", desc: "Competencias clave" },
              { letter: "O", title: "Optimizar", desc: "La gestión comercial" },
              { letter: "R", title: "Replicar", desc: "Buenas prácticas" },
              { letter: "M", title: "Mejorar", desc: "Resultados medibles" },
              { letter: "A", title: "Actuar", desc: "Con propósito claro" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-goya-gold text-center group">
                <div className="text-5xl font-black text-goya-blue/10 group-hover:text-goya-blue/20 transition-colors mb-2">
                  {item.letter}
                </div>
                <h4 className="text-xl font-bold text-goya-blue mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-goya-blue mb-12">
            Explora la Plataforma
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sobre el Proyecto",
                icon: <BookOpen className="w-10 h-10 text-goya-gold" />,
                desc: "Visión, misión y objetivos estratégicos 2026.",
                href: "/proyecto-forma"
              },
              {
                title: "Módulos de Formación",
                icon: <Award className="w-10 h-10 text-goya-gold" />,
                desc: "Accede a los 8 módulos de capacitación interactiva.",
                href: "/modulos"
              },
              {
                title: "Formadores",
                icon: <Users className="w-10 h-10 text-goya-gold" />,
                desc: "Conoce a los expertos y avatares del curso.",
                href: "/formadores"
              },
              {
                title: "Créditos",
                icon: <UserCheck className="w-10 h-10 text-goya-gold" />,
                desc: "Equipo de creación y tecnologías utilizadas.",
                href: "/creditos"
              },
            ].map((card, index) => (
              <Link key={index} href={card.href} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-goya-gold/30 hover:shadow-lg transition-all flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-goya-blue transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {card.desc}
                  </p>
                  <div className="text-goya-blue font-semibold flex items-center text-sm group-hover:text-goya-gold transition-colors">
                    Acceder <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
