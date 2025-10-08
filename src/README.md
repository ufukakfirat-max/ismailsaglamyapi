# İsmail Sağlam Yapı - Web Sitesi

Ankara Sincan'da faaliyet gösteren kereste, lambri ve orman ürünleri üreticisi İsmail Sağlam Yapı'nın modern web sitesi.

## Özellikler

- ✅ Modern ve responsive tasarım
- ✅ SEO optimize edilmiş
- ✅ Hızlı yüklenme
- ✅ Mobil uyumlu
- ✅ Google Analytics desteği
- ✅ Schema markup

## Hosting Seçenekleri

### 1. Vercel (Önerilen - Ücretsiz)

En kolay ve hızlı hosting seçeneği:

1. [Vercel.com](https://vercel.com)'a üye olun
2. GitHub/GitLab hesabınızı bağlayın
3. Projenizi repository'e yükleyin
4. Vercel'de "Import Project" ile projeyi import edin
5. Deploy butonuna basın
6. Otomatik olarak `yourproject.vercel.app` adresinde yayınlanır
7. Custom domain için Vercel panelinden ayarlayın

**Avantajları:**
- Ücretsiz hosting
- Otomatik SSL sertifikası
- CDN desteği
- Otomatik deployment

### 2. Netlify (Ücretsiz)

1. [Netlify.com](https://netlify.com)'a üye olun
2. "New site from Git" seçin
3. GitHub repository'nizi bağlayın
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy butonuna basın

### 3. GitHub Pages (Ücretsiz)

1. GitHub repository oluşturun
2. `.github/workflows/deploy.yml` dosyası oluşturun:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Geleneksel Hosting (Ücretli)

Türk hosting firmaları için:

1. **Build işlemi yapın:**
```bash
npm install
npm run build
```

2. `dist` klasöründeki dosyaları hosting'e yükleyin
3. Domain'i `dist` klasörüne yönlendirin

**Önerilen Türk Hosting Firmaları:**
- Turhost
- Natro
- Hosting.com.tr
- Radore

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme serverını başlat
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

## SEO Ayarları

### Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console) adresine gidin
2. Site'nizi ekleyin ve doğrulayın
3. Sitemap'i submit edin: `yoursite.com/sitemap.xml`

### Google Analytics
1. `index.html` dosyasındaki GA4 tracking kodunu aktif edin
2. Kendi Measurement ID'nizi yazın

### Meta Tags
Tüm SEO meta tagları `index.html` dosyasında hazır durumda.

## Custom Domain Ayarları

### Vercel için:
1. Vercel dashboard'da projenizi seçin
2. "Settings" > "Domains"
3. Custom domain ekleyin
4. DNS ayarlarını yapın

### DNS Ayarları:
```
A Record: @ -> Hosting IP'si
CNAME: www -> yoursite.vercel.app
```

## Teknik Detaylar

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Optimizasyon:** Otomatik kod bölme, minifikasyon
- **SEO:** Schema markup, Open Graph, meta tags

## Destek

Herhangi bir sorun yaşarsanız hosting sağlayıcınızın destek ekibiyle iletişime geçebilirsiniz.