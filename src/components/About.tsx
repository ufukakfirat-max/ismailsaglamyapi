import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="hakkimizda" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">İsmail Sağlam Yapı Hakkında</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                2003 yılından bu yana Ankara Sincan Sanayi Sitesi'nde faaliyet gösteren İsmail Sağlam Yapı, 
                kereste, lambri ve orman ürünleri sektöründe 20 yılı aşkın tecrübesiyle kaliteli hizmet sunmaktadır.
              </p>
              <p>
                Modern üretim tesisimizde, kaliteli hammadde seçimi ve deneyimli işçilik ile müşterilerimizin 
                ihtiyaçlarına en uygun çözümleri üretiyoruz. Çam, meşe, kavak ve gürgen gibi farklı ağaç 
                türlerinden kereste üretimi yapmaktayız.
              </p>
              <p>
                Ankara ve çevre illerde binlerce müşteriye hizmet veren firmamız, kalite, güven ve 
                müşteri memnuniyeti ilkelerinden ödün vermez.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">20+</div>
                <div className="text-sm text-gray-600">Yıl Tecrübe</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">5000+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1547609434-b732edfee020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwd29ya3Nob3AlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1OTkxOTAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="İsmail Sağlam Yapı Fabrika"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center mb-8">Neden İsmail Sağlam Yapı?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="mb-2">Kalite Garantisi</h4>
              <p className="text-gray-600">
                Tüm ürünlerimizde TSE standartlarında kalite güvencesi
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mb-2">Hızlı Teslimat</h4>
              <p className="text-gray-600">
                Ankara ve çevre illere aynı gün teslimat imkanı
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="mb-2">Uygun Fiyat</h4>
              <p className="text-gray-600">
                Direkt üretici avantajı ile en uygun fiyat garantisi
              </p>
            </div>
          </div>
        </div>

        {/* Location & SEO */}
        <div className="mt-12 text-center bg-white p-6 rounded-lg shadow-md">
          <h4 className="mb-4">Adresimiz</h4>
          <p className="text-gray-600 mb-2">
            <strong>İsmail Sağlam Yapı</strong> - Ankara Sincan Sanayi Sitesi
          </p>
          <p className="text-sm text-gray-500">
            Ankara kereste fabrikası, Sincan lambri üreticisi, kaliteli orman ürünleri, 
            ahşap malzeme tedarikçisi, yapı malzemesi satışı
          </p>
        </div>
      </div>
    </section>
  );
}
