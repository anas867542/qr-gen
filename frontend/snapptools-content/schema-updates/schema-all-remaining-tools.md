# Schema Updates — Missing JSON-LD for All Tool Pages

Add each block to the `<head>` of the corresponding page.
These are the pages NOT yet covered in the previous schema file.

---

## Breadcrumb Schema (add to EVERY tool page)

This tells Google the page hierarchy: Home > Tools > [Tool Name]
It can display as breadcrumbs in search results, improving click-through rate.

Replace `TOOL-NAME` and `TOOL-URL-SLUG` for each page.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://snapptools.net/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "All Tools",
      "item": "https://snapptools.net/#tools"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TOOL-NAME",
      "item": "https://snapptools.net/tools/TOOL-URL-SLUG"
    }
  ]
}
</script>
```

---

## UUID Generator — /tools/uuid-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "UUID Generator",
  "url": "https://snapptools.net/tools/uuid-generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Generate v4 UUIDs instantly online. Copy single UUIDs or bulk generate. Free, no signup, runs in your browser.",
  "featureList": ["UUID v4 generation", "Single and bulk generation", "One-click copy", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Lorem Ipsum Generator — /tools/lorem-ipsum-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lorem Ipsum Generator",
  "url": "https://snapptools.net/tools/lorem-ipsum-generator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words. Free and instant — no signup required.",
  "featureList": ["Generate paragraphs, sentences, or words", "Custom quantity", "One-click copy", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Random Number Generator — /tools/random-number-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Random Number Generator",
  "url": "https://snapptools.net/tools/random-number-generator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Generate random numbers within any range. Single or multiple numbers, with or without duplicates. Free, no signup.",
  "featureList": ["Custom min and max range", "Single or multiple numbers", "Duplicates on/off", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## URL Encoder — /tools/url-encoder

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "URL Encoder & Decoder",
  "url": "https://snapptools.net/tools/url-encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Encode or decode URL percent-encoded strings online. Fast, free, works in your browser. No signup required.",
  "featureList": ["Percent-encode URLs", "Decode URL-encoded strings", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## JSON Formatter — /tools/json-formatter

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JSON Formatter & Validator",
  "url": "https://snapptools.net/tools/json-formatter",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Format, validate, and beautify JSON instantly. Detects syntax errors. Free online JSON formatter — no signup, no data uploaded.",
  "featureList": ["Format and beautify JSON", "Validate JSON syntax", "Error detection by line", "No data sent to servers", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## PNG to JPG — /tools/png-to-jpg

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PNG to JPG Converter",
  "url": "https://snapptools.net/tools/png-to-jpg",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert PNG images to JPG/JPEG online for free. Adjust quality and download instantly. Runs in your browser — no upload to servers.",
  "featureList": ["PNG to JPG conversion", "Quality adjustment", "Instant download", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## JPG to WebP — /tools/jpg-to-webp

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JPG to WebP Converter",
  "url": "https://snapptools.net/tools/jpg-to-webp",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert JPG images to WebP format for smaller file sizes without losing quality. Free, instant, no signup required.",
  "featureList": ["JPG to WebP conversion", "Smaller file size than JPEG", "No quality loss", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Image Resizer — /tools/image-resizer

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Image Resizer",
  "url": "https://snapptools.net/tools/image-resizer",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Resize images by pixels or percentage online for free. Keep aspect ratio or set custom dimensions. No signup required.",
  "featureList": ["Resize by pixels or percentage", "Keep aspect ratio option", "Supports JPG PNG WebP", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Image Crop — /tools/image-crop

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Image Crop Tool",
  "url": "https://snapptools.net/tools/image-crop",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Crop images to a selected area online for free. Download the cropped result instantly. No signup, runs in your browser.",
  "featureList": ["Select crop area visually", "Download cropped image", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Image to Base64 — /tools/image-to-base64

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Image to Base64 Converter",
  "url": "https://snapptools.net/tools/image-to-base64",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert images to Base64 data URLs for use in HTML and CSS. Free, instant, runs in your browser — image never leaves your device.",
  "featureList": ["Convert image to Base64 data URL", "Use in HTML or CSS", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## PDF to Word — /tools/pdf-to-word

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF to Word Converter",
  "url": "https://snapptools.net/tools/pdf-to-word",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert PDF files to Word (.docx) documents online for free. Extract text and download instantly. No signup required.",
  "featureList": ["PDF to Word (.docx) conversion", "Text extraction", "Instant download", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Word to PDF — /tools/word-to-pdf

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Word to PDF Converter",
  "url": "https://snapptools.net/tools/word-to-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert Word (.docx) documents to PDF online for free. Upload and download in your browser. No signup required.",
  "featureList": ["Word .docx to PDF", "Instant download", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Split PDF — /tools/split-pdf

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Splitter",
  "url": "https://snapptools.net/tools/split-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Split a PDF into multiple files by page range or one page per file. Free, instant, no signup, no data sent to servers.",
  "featureList": ["Split by page range", "One PDF per page option", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Compress PDF — /tools/compress-pdf

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Compressor",
  "url": "https://snapptools.net/tools/compress-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Reduce PDF file size by lowering image resolution. Free online PDF compressor — works in your browser, no signup needed.",
  "featureList": ["Reduce PDF file size", "Lower image resolution in PDF", "Runs in browser", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## Add Watermark to PDF — /tools/add-watermark-pdf

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Add Watermark to PDF",
  "url": "https://snapptools.net/tools/add-watermark-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Add a text or image watermark to every page of your PDF for free. No signup required — works instantly in your browser.",
  "featureList": ["Text watermark", "Image watermark", "Applies to every page", "No signup required"],
  "provider": { "@type": "Organization", "name": "Snapptools", "url": "https://snapptools.net" }
}
</script>
```

---

## FAQ Schema for the /faq page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Snapptools tools really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All tools on Snapptools are completely free to use with no signup required. We may show ads to keep the site running."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data sent to your servers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most tools run entirely in your browser. Your inputs — text, files, images — are not uploaded to our servers. A small number of tools may use an optional API, which is clearly stated on those pages."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account to use Snapptools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Every tool on Snapptools is available without registering or logging in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use these tools on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Snapptools works on phones and tablets. Most tools work well on mobile, though some tools involving file uploads work best on desktop."
      }
    },
    {
      "@type": "Question",
      "name": "How does Snapptools make money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Snapptools may show ads (such as Google AdSense) and may include affiliate links to products we recommend. Using the tools remains free."
      }
    }
  ]
}
</script>
```

---

## Organization Schema (add to homepage only, once)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Snapptools",
  "url": "https://snapptools.net",
  "logo": "https://snapptools.net/logo.png",
  "description": "Free online tools for everyone — QR code generator, password generator, JSON formatter, PDF tools, image tools, and more. No signup, runs in your browser.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://snapptools.net/contact"
  },
  "sameAs": []
}
</script>
```

Fill in `sameAs` with your social media URLs once you have them (Twitter/X, LinkedIn, etc.)
