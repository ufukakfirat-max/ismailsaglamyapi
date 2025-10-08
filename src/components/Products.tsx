import { ImageWithFallback } from './figma/ImageWithFallback';

export function Products() {
  const products = [
    {
      category: "Kereste Çeşitleri",
      items: [
        "Çam Kereste - İnşaat ve Mobilya",
        "Meşe Kereste - Premium Kalite", 
        "Kavak Kereste - Ekonomik Çözüm",
        "Gürgen Kereste - Ağır Hizmet"
      ]
    },
    {
      category: "Lambri Modelleri",
      items: [
        "Ahşap Duvar Lambri",
        "Tavan Lambri Sistemleri",
        "Dış Cephe Lambri",
        "Dekoratif Lambri Paneller"
      ]
    },
    {
      category: "Orman Ürünleri",
      items: [
        "Doğal Ahşap Malzeme",
        "İşlenmiş Ahşap Ürünler",
        "Yapı Malzemesi",
        "Özel Kesim Hizmetleri"
      ]
    }
  ];

  return (
    <section id="urunler" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ürünlerimiz</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ankara'nın en kaliteli kereste, lambri ve orman ürünleri üreticisinden geniş ürün yelpazesi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {products.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-4 text-green-600">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1606229325385-64ea02124b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1iZXIlMjBsdW1iZXIlMjB3b29kJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTkxODk5NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="İsmail Sağlam Yapı Kereste Ürünleri"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 bg-green-50 p-8 rounded-lg">
          <div className="text-center">
            <h3 className="mb-4">Özel Kesim ve Ölçü Hizmeti</h3>
            <p className="text-gray-600 mb-6">
              İhtiyacınıza özel ölçülerde kereste kesimi, planya ve işleme hizmetleri sunuyoruz. 
              Ankara Sincan fabrikamızda modern makineler ile hassas işçilik garantisi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>🏭 Ankara Sincan Üretim</span>
              <span>📏 Özel Ölçü Kesim</span>
              <span>🚚 Hızlı Teslimat</span>
              <span>✅ Kalite Garantisi</span>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            <strong>Anahtar Kelimeler:</strong> Ankara kereste, Sincan lambri, orman ürünleri, ahşap malzeme, 
            çam kereste, meşe kereste, yapı malzemesi, ahşap lambri, kereste üreticisi, 
            kaliteli kereste, lambri montaj, ahşap işleme
          </p>
        </div>
      </div>
    </section>
  );
}