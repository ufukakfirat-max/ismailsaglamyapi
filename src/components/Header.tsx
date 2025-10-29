import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "#anasayfa" },
    { name: "Hizmetlerimiz", href: "#hizmetler" },
    { name: "Ürünlerimiz", href: "#urunler" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+90 312 270 46 42</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>info@ismailsaglamyapi.com</span>
              </div>
            </div>
            <div className="hidden sm:block">
              Ankara Sincan Sanayi Sitesi - Kaliteli Orman
              Ürünleri
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl text-green-800">
              İsmail Sağlam Yapı
            </h1>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">
              Kereste & Orman Ürünleri
            </span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-800 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-800"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
