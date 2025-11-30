export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8 mt-auto border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                    <span className="font-bold text-goya-blue text-lg">PROYECTO FORMA</span>
                </div>
                <p className="text-sm mb-2">
                    &copy; {new Date().getFullYear()} Goya Europa. Todos los derechos reservados.
                </p>
                <p className="text-xs text-gray-500">
                    Uso interno exclusivo para formación corporativa.
                </p>
            </div>
        </footer>
    );
}
