import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kereste ve orman ürünleri ihtiyaçlarınız için
            bizimle iletişime geçin. Uzman ekibimiz size en
            uygun çözümü sunmaya hazır.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-green-700 flex justify-center mb-4">
              <MapPin size={48} />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              Adresimiz
            </h3>
            <p className="text-gray-700">
              Ankara Sincan Sanayi Sitesi
              <br />
              Sincan / Ankara
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-green-700 flex justify-center mb-4">
              <Phone size={48} />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              Telefon
            </h3>
            <p className="text-gray-700">
              <a
                href="tel:+905446785891"
                className="hover:text-green-700"
              >
                +90 544 678 58 91
              </a>
              <br />
              <a
                href="tel:+905446785891"
                className="hover:text-green-700"
              >
                +90 544 678 58 91
              </a>
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-green-700 flex justify-center mb-4">
              <Mail size={48} />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">
              E-posta
            </h3>
            <p className="text-gray-700">
              <a
                href="mailto:info@ismailsaglamyapi.com"
                className="hover:text-green-700"
              >
                info@ismailsaglamyapi.com
              </a>
              <br />
              <a
                href="mailto:satis@ismailsaglamyapi.com"
                className="hover:text-green-700"
              >
                satis@ismailsaglamyapi.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-gray-900 mb-6">
              Çalışma Saatleri
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock
                  size={24}
                  className="text-green-700 mr-3"
                />
                <div>
                  <div className="text-gray-900">
                    Pazartesi - Cumartesi
                  </div>
                  <div className="text-gray-600">
                    08:00 - 18:00
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock
                  size={24}
                  className="text-green-700 mr-3"
                />
                <div>
                  <div className="text-gray-900">Pazar</div>
                  <div className="text-gray-600">Kapalı</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h4 className="text-lg text-gray-900 mb-3">
                Acil Durum İletişim
              </h4>
              <p className="text-gray-700 mb-4">
                Acil kereste ihtiyaçlarınız için 7/24
                ulaşabileceğiniz numaramız:
              </p>
              <a
                href="tel:+905446785891"
                className="text-orange-600 hover:text-orange-700 text-lg"
              >
                +90 544 678 58 91
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-gray-900 mb-6">
              Teklif Formu
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-700 mb-1"
                  >
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-700 mb-1"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-1"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-sm text-gray-700 mb-1"
                >
                  İhtiyacınız Olan Ürün *
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="kereste">Kereste</option>
                  <option value="lambri">Lambri</option>
                  <option value="yapi-malzemesi">
                    Ahşap Yapı Malzemesi
                  </option>
                  <option value="cati-kerestesi">
                    Çatı Kerestesi
                  </option>
                  <option value="ozel-uretim">
                    Özel Ebat Üretim
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Proje Detayları ve İhtiyaçlarınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Projenizin detaylarını, ihtiyacınız olan ürün özelliklerini ve miktarlarını belirtiniz..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Teklif Talebini Gönder
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              * Zorunlu alanlar. Talebinizi en kısa sürede
              değerlendirip size dönüş yapacağız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
