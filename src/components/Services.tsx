import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      title: "Kereste Üretimi",
      description: "Kaliteli çam, meşe ve diğer ağaç türlerinden profesyonel kereste üretimi",
      image: "https://images.unsplash.com/photo-1606229325385-64ea02124b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1iZXIlMjBsdW1iZXIlMjB3b29kJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTkxODk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      keywords: "kereste, ahşap, çam kereste, meşe kereste"
    },
    {
      title: "Lambri Sistemleri",
      description: "İç ve dış mekan lambri uygulamaları, montaj ve bakım hizmetleri",
      image: "https://images.unsplash.com/photo-1634672652995-ee7525bce595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwcGxhbmtzJTIwbHVtYmVyJTIweWFyZHxlbnwxfHx8fDE3NTk5MTg5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      keywords: "lambri, ahşap lambri, duvar kaplaması"
    },
    {
      title: "Orman Ürünleri",
      description: "Doğal ve işlenmiş orman ürünleri tedariki ve toptan satış",
      image: "https://images.unsplash.com/photo-1547609434-b732edfee020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwd29ya3Nob3AlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1OTkxOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      keywords: "orman ürünleri, ahşap malzeme, yapı malzemesi"
    }
  ];

  return (
    <section id="hizmetler" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Hizmetlerimiz</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ankara Sincan'da 20 yılı aşkın tecrübemizle kaliteli kereste, lambri ve orman ürünleri üretimi yapıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-green-600">
                  Anahtar Kelimeler: {service.keywords}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ankara kereste, Sincan lambri, kaliteli orman ürünleri ve yapı malzemesi ihtiyaçlarınız için bize ulaşın
          </p>
          <a 
            href="#iletisim" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}