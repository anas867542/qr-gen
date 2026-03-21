# JSON-LD Structured Data — Schema.org

Paste each script block into the `<head>` of the corresponding page.
JSON-LD does NOT affect visible content — it's invisible markup for Google.

---

## Homepage — snapptools.net/

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Snapptools",
  "url": "https://snapptools.net",
  "description": "Free online tools for everyone — QR code generator, password generator, JSON formatter, PDF tools, image tools, and more. No signup, runs in your browser.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://snapptools.net/#tools?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net",
    "logo": {
      "@type": "ImageObject",
      "url": "https://snapptools.net/logo.png"
    }
  }
}
</script>
```

---

## QR Code Generator — /tools/qr-code-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free QR Code Generator",
  "url": "https://snapptools.net/tools/qr-code-generator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Create free QR codes for URLs, Wi-Fi, and text. Customize colors and size, then download as PNG. No signup required.",
  "featureList": [
    "QR codes for URLs",
    "QR codes for Wi-Fi",
    "QR codes for plain text",
    "Custom colors",
    "Download as PNG",
    "No signup required"
  ],
  "screenshot": "https://snapptools.net/screenshots/qr-code-generator.png",
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Password Generator — /tools/password-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free Password Generator",
  "url": "https://snapptools.net/tools/password-generator",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Generate strong, random passwords with custom length and character sets. Free and private — passwords are never sent to our servers.",
  "featureList": [
    "Custom password length",
    "Uppercase and lowercase letters",
    "Numbers and special characters",
    "100% private — runs in browser",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
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
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Format, validate, and beautify JSON instantly. Detects syntax errors. Free online JSON formatter — no signup, no data uploaded.",
  "featureList": [
    "Format and beautify JSON",
    "Validate JSON syntax",
    "Detect and highlight errors",
    "No data sent to servers",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Word Counter — /tools/word-counter

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free Word Counter",
  "url": "https://snapptools.net/tools/word-counter",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Count words, characters, sentences, and paragraphs in seconds. Free online word counter — paste your text and get instant results.",
  "featureList": [
    "Word count",
    "Character count (with and without spaces)",
    "Sentence count",
    "Paragraph count",
    "No data sent to servers",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Image Compressor — /tools/image-compressor

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free Image Compressor",
  "url": "https://snapptools.net/tools/image-compressor",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Compress JPEG, PNG, and WebP images directly in your browser. Reduce file size before uploading — free, fast, and private.",
  "featureList": [
    "Compress JPEG images",
    "Compress PNG images",
    "Compress WebP images",
    "Runs entirely in browser",
    "No upload to servers",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Merge PDF — /tools/merge-pdf

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Free PDF Merger",
  "url": "https://snapptools.net/tools/merge-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Combine multiple PDF files into one online for free. Reorder pages and download your merged PDF instantly. No signup required.",
  "featureList": [
    "Merge multiple PDF files",
    "Reorder pages before merging",
    "Download merged PDF instantly",
    "No signup required",
    "Free with no file size limit stated"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
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
  "name": "Free PDF Splitter",
  "url": "https://snapptools.net/tools/split-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Split a PDF into multiple files by page range or one page per file. Free, instant, and private — no signup, no data sent to servers.",
  "featureList": [
    "Split PDF by page range",
    "One PDF per page",
    "Runs in browser",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Base64 Encoder — /tools/base64-encoder

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Base64 Encoder & Decoder",
  "url": "https://snapptools.net/tools/base64-encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Encode text to Base64 or decode Base64 back to text instantly. Free, private, and runs entirely in your browser.",
  "featureList": [
    "Encode text to Base64",
    "Decode Base64 to text",
    "Runs in browser",
    "No signup required"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Hash Generator — /tools/hash-generator

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hash Generator",
  "url": "https://snapptools.net/tools/hash-generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any (Web Browser)",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text. Free online hash generator — instant results, no data sent to servers.",
  "featureList": [
    "MD5 hash",
    "SHA-1 hash",
    "SHA-256 hash",
    "SHA-384 hash",
    "SHA-512 hash",
    "Runs in browser — no data uploaded"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## Blog page — /blog

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Snapptools Blog",
  "url": "https://snapptools.net/blog",
  "description": "Step-by-step guides and articles about QR codes, PDF tools, image compression, password security, and more.",
  "publisher": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net"
  }
}
</script>
```

---

## How to add to blog post pages (template)

For each blog article, add this block and fill in the fields:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ARTICLE TITLE HERE",
  "description": "ARTICLE META DESCRIPTION HERE",
  "url": "https://snapptools.net/blog/ARTICLE-SLUG",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": {
    "@type": "Organization",
    "name": "Snapptools"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Snapptools",
    "url": "https://snapptools.net",
    "logo": {
      "@type": "ImageObject",
      "url": "https://snapptools.net/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://snapptools.net/blog/ARTICLE-SLUG"
  }
}
</script>
```

---

## How to add FAQ schema (use on tool pages that have FAQ sections)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All Snapptools tools are completely free to use with no signup required."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data sent to your servers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This tool runs entirely in your browser. Your files and inputs are not uploaded to our servers."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No account is needed. You can use every tool on Snapptools without registering or logging in."
      }
    }
  ]
}
</script>
```

Add these Q&As to the FAQ schema on the /faq page as well, with all FAQ items from that page.
