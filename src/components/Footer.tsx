import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">
              İsmail Sağlam Yapı
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Ankara'da kereste, lambri ve orman ürünleri
              sektöründe 20 yılı aşkın tecrübemizle kaliteli
              hizmet sunuyoruz. Projelerinizin güvenilir çözüm
              ortağıyız.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>
                  Ahi Evran Mah. 224 Cadde No:56/B Sincan Sanayi Sitesi, Sincan/Ankara
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+90 544 678 58 91</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@ismailsaglamyapi.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#urunler"
                  className="hover:text-white transition-colors"
                >
                  Kereste
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-white transition-colors"
                >
                  Lambri
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-white transition-colors"
                >
                  Ahşap Yapı Malzemesi
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-white transition-colors"
                >
                  Çatı Kerestesi
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-white transition-colors"
                >
                  Özel Ebat Üretim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Hizmet Alanları</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Ankara</li>
              <li>Kırıkkale</li>
              <li>Çankırı</li>
              <li>Kırşehir</li>
              <li>Aksaray</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 İsmail Sağlam Yapı. Tüm hakları saklıdır.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <span className="mr-4">Kereste Ankara</span>
              <span className="mr-4">Lambri Ankara</span>
              <span>Orman Ürünleri</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords Section */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-xs">
            <p>
              Kereste Ankara | Lambri Ankara | Orman Ürünleri
              Ankara | Ahşap Yapı Malzemesi | Çatı Kerestesi |
              Sincan Kereste | Ankara Lambri Satış | Ahşap
              Malzeme Tedarik | Kereste Fabrika | Orman Ürünleri
              Üretici | Kaliteli Kereste | İnşaat Kerestesi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
