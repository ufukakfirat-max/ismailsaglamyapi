import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="anasayfa" className="relative bg-gradient-to-r from-green-800 to-green-700 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/ufukakfirat-max/ismailsaglamyapi/refs/heads/main/src/pic/home3.jpeg')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl mb-6">
              Kaliteli Kereste ve Orman Ürünleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white-200">
              Ankara'nın güvenilir kereste tedarikçisi. Lambri, ahşap yapı malzemeleri ve orman ürünlerinde 
              uzman ekibimizle kaliteli hizmet sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#iletisim"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 text-center"
              >
                Hemen Teklif Al
              </a>
              <a
                href="#urunler"
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg transition-colors duration-200 text-center"
              >
                Ürünlerimizi İncele
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
