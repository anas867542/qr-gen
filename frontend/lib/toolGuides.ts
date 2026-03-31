/**
 * SEO content for each tool page: what it does, how to use, benefits, use cases.
 * Minimum ~300–500 words per tool for AdSense/content value.
 */
export interface ToolGuideSection {
  heading: string;
  paragraphs: string[];
}

export interface ToolGuide {
  slug: string;
  sections: ToolGuideSection[];
  /** Short bullet list shown under an H2 "Features" (SEO + scanability). */
  features?: string[];
  /** FAQ items for H2 "Frequently asked questions" + optional FAQ schema. */
  faqs?: { question: string; answer: string }[];
}

export const TOOL_GUIDES: ToolGuide[] = [
  {
    slug: "qr-code-generator",
    sections: [
      {
        heading: "What is a QR code generator?",
        paragraphs: [
          "A QR code generator is an online tool that turns a URL, short text, or Wi‑Fi details into a scannable square barcode. Our free QR code generator runs entirely in your browser: you type what you want to encode, customize appearance, and download a PNG you can print or share digitally. There is no signup and no server upload of your content—ideal when you need a QR code for a website link, WhatsApp chat link, menu, flyer, or business card.",
          "QR (Quick Response) codes store data in a grid of black and white modules. Modern phone cameras decode them in a second, which is why they are everywhere in retail, hospitality, events, and personal sharing. Whether you need an instant QR code generator for a one-off campaign or a repeatable workflow for your business, the same rules apply: use a high-contrast design, test the scan on real devices, and keep the encoded content short when possible for easier scanning.",
        ],
      },
      {
        heading: "How to use this QR code generator",
        paragraphs: [
          "Step 1: Choose the type—URL for a website or landing page (including links you might share via WhatsApp or social apps), Text for a short message, or Wi‑Fi so guests can join your network without typing a password.",
          "Step 2: Enter your content. For URLs we normalize https:// when needed. For Wi‑Fi, add SSID, password, and security type (e.g. WPA).",
          "Step 3: Adjust the size slider so the code will be sharp when printed or shown on a screen.",
          "Step 4: Optional: set foreground and background colors to match your brand—keep enough contrast for reliable scans.",
          "Step 5: Click generate, test with your phone, then download the PNG for print or digital use.",
        ],
      },
      {
        heading: "Benefits for business and personal use",
        paragraphs: [
          "You can create a QR code without signup, which removes friction when you are in a hurry. For business, QR codes bridge offline materials and online actions: menus, coupons, feedback forms, and product registration. For personal use, they are handy for sharing Wi‑Fi, a portfolio link, or a donation page. Because processing is local, you can experiment with colors and size until the result looks right.",
        ],
      },
      {
        heading: "Common use cases",
        paragraphs: [
          "Marketing and print: posters, flyers, packaging, and table tents linking to offers or sign-up pages. Hospitality: digital menus and review links. Events: schedules, maps, or Wi‑Fi for attendees. Professional: business cards and email signatures pointing to your site or booking page. If you need a free QR code generator for link sharing or Wi‑Fi, this tool covers the most popular scenarios in one place.",
        ],
      },
    ],
    features: [
      "Free QR code generator online—no account required",
      "URL, plain text, and Wi‑Fi QR types",
      "Custom size and colors; instant PNG download",
      "Runs in your browser (privacy-friendly)",
      "Great for business cards, menus, and campaigns",
    ],
    faqs: [
      {
        question: "Is this QR code generator really free?",
        answer:
          "Yes. You can generate and download QR codes at no cost. We do not require signup to use the core generator.",
      },
      {
        question: "Can I use this as a QR code generator for WhatsApp or a website link?",
        answer:
          "Yes. For WhatsApp, paste the full wa.me or WhatsApp link into the URL field. For any website, paste the page URL—we’ll help normalize it so phones open the right destination.",
      },
      {
        question: "Do you store my URLs or Wi‑Fi passwords?",
        answer:
          "No. Generation happens in your browser; we do not upload your content to our servers for this tool.",
      },
      {
        question: "What format is the download?",
        answer:
          "You get a PNG image suitable for web, email, and most print workflows. Test the scan after resizing for very small print.",
      },
    ],
  },
  {
    slug: "password-generator",
    sections: [
      {
        heading: "What is a strong password generator?",
        paragraphs: [
          "A strong password generator creates random passwords that are difficult to guess or brute-force. Our secure password generator runs locally in your browser: you pick length and character types (letters, numbers, symbols), then copy the result into a password manager or signup form. Unlike memorable phrases, random strings dramatically reduce the risk of dictionary attacks and credential stuffing if one site suffers a breach.",
          "Good online habits combine length (often 16+ characters), randomness, and uniqueness per account. This random password generator free tool helps you meet strict rules—such as “must include a symbol”—without inventing patterns that attackers can predict.",
        ],
      },
      {
        heading: "How to use this password generator",
        paragraphs: [
          "Step 1: Set a length that your service allows; 16–20 characters is a strong default for most accounts.",
          "Step 2: Enable character sets: uppercase, lowercase, numbers, and symbols if the site allows them.",
          "Step 3: Click generate to produce a new password. If a site rejects certain symbols, toggle options and regenerate.",
          "Step 4: Copy the password once and save it in a trusted password manager—avoid reusing it across sites.",
          "Step 5: Generate a new password whenever you rotate credentials or create a new login.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "You get passwords with symbols and mixed character types in one click, which saves time compared to inventing them manually. Because nothing is transmitted to our servers for generation, you retain control of sensitive data. Use it whenever you need a secure password generator tool for work, school, or personal accounts.",
        ],
      },
      {
        heading: "When to use it",
        paragraphs: [
          "Use it for new email, banking, cloud, and shopping accounts; for replacing weak passwords; and for shared or team logins where policy requires complexity. Pair it with a password manager so you do not have to memorize dozens of random strings.",
        ],
      },
    ],
    features: [
      "Strong password generator online—custom length",
      "Include or exclude uppercase, lowercase, numbers, symbols",
      "Generate password with symbols online in one click",
      "Runs locally in your browser",
      "Unlimited generations; no signup",
    ],
    faqs: [
      {
        question: "Is this random password generator free?",
        answer: "Yes. You can generate as many passwords as you need at no charge.",
      },
      {
        question: "Do you save my passwords?",
        answer:
          "No. Generation happens in your browser; we do not receive or store the passwords you create.",
      },
      {
        question: "What length should I use?",
        answer:
          "Longer is generally better. Many experts suggest at least 12–16 characters for important accounts; use the maximum allowed when possible.",
      },
      {
        question: "Should I memorize every password?",
        answer:
          "It is safer to use a password manager and unique passwords per site than to reuse easy-to-remember passwords.",
      },
    ],
  },
  {
    slug: "json-formatter",
    sections: [
      {
        heading: "What is a JSON Formatter?",
        paragraphs: [
          "A JSON formatter (also called a JSON beautifier or JSON pretty printer) takes compact or unreadable JSON text and restructures it with consistent indentation, line breaks, and spacing. The result is human-readable JSON that is much easier to scan, debug, and share.",
          "JSON (JavaScript Object Notation) is the data format used by almost every web API, configuration file, and database export. When APIs return data, it usually arrives as a single compressed line. A formatter separates each key-value pair onto its own line, indents nested objects and arrays, and makes the structure visible.",
          "A JSON validator checks whether your JSON follows correct syntax rules. Common mistakes include trailing commas, unquoted keys, mismatched brackets, and single quotes instead of double quotes. Our tool flags these errors with context so you can fix them fast.",
        ],
      },
      {
        heading: "How to Use This JSON Formatter",
        paragraphs: [
          "Step 1: Paste your JSON into the input box — minified JSON, partially formatted JSON, or JSON with suspected errors.",
          "Step 2: Click Format / Validate. The tool checks syntax and returns a result instantly.",
          "Step 3: If the JSON is valid, the output shows formatted JSON with proper indentation. Copy it with the copy button.",
          "Step 4: If there are errors, read the message with line and character hints. Fix the input and reformat.",
          "Step 5: Use the output in your editor, config file, documentation, or tickets. No account needed — formatting runs entirely in your browser.",
        ],
      },
      {
        heading: "Common JSON Errors This Tool Catches",
        paragraphs: [
          "Trailing comma — a comma after the last item in an object or array is invalid JSON (though valid in JavaScript). Example: {\"key\": \"value\",} will be flagged.",
          "Unquoted keys — JSON requires double-quoted keys. {key: \"value\"} is JavaScript-style, not valid JSON; use {\"key\": \"value\"}.",
          "Single quotes — JSON only accepts double quotes. Replace {'key': 'value'} with {\"key\": \"value\"}.",
          "Missing commas — forgetting a comma between items breaks parsing; the validator points near the problem.",
          "Mismatched brackets — opening [ and closing }, or vice versa, causes parse failure.",
          "Unescaped special characters — literal newlines or tabs inside strings must be escaped as \\n or \\t.",
        ],
      },
      {
        heading: "Why Use a Browser-Based JSON Formatter?",
        paragraphs: [
          "Privacy: API responses with user data or credentials should not go to unknown servers — our formatter runs in your browser so the JSON never leaves your device.",
          "Speed: no server round-trip; validation happens in milliseconds for typical payloads.",
          "No installation: no extension or account. Works offline after the page loads.",
        ],
      },
    ],
    features: [
      "Format and indent JSON with consistent spacing",
      "Validate JSON syntax and catch errors by line",
      "Beautify minified or compressed JSON",
      "Highlight syntax errors with location details",
      "Copy formatted output in one click",
      "Runs entirely in your browser — no data uploaded",
      "Free with no signup required",
    ],
    faqs: [
      {
        question: "Is this JSON formatter free?",
        answer: "Yes. Format and validate as much JSON as you want at no cost, with no account required.",
      },
      {
        question: "Does this tool upload my JSON to your servers?",
        answer:
          "No. All formatting and validation runs in your browser using JavaScript. Your JSON data never leaves your device.",
      },
      {
        question: "What is the difference between formatting and validating JSON?",
        answer:
          "Formatting (beautifying) makes JSON readable with indentation and line breaks. Validating checks strict syntax rules. This tool does both together.",
      },
      {
        question: "Can this tool handle large JSON files?",
        answer:
          "Yes for typical API responses and configs. Very large files (several megabytes) may be slower depending on your device.",
      },
      {
        question: "Why does my JSON fail validation even though it works in JavaScript?",
        answer:
          "JavaScript allows trailing commas, single quotes, and comments; strict JSON does not. Use this validator for JSON compliance.",
      },
      {
        question: "Can I use this to format JSON from an API response?",
        answer:
          "Yes. Paste the raw body from Postman, browser DevTools, or your terminal for instant readable output.",
      },
    ],
  },
  {
    slug: "merge-pdf",
    sections: [
      {
        heading: "What does merging PDFs mean?",
        paragraphs: [
          "Merging (or combining) PDFs means taking two or more separate PDF files and joining them into a single PDF document. The pages appear in the order you choose, exactly as they were in the original files.",
          "Common reasons to merge PDFs: work and business (cover letter, resume, portfolio in one application); finance and admin (monthly statements into one annual file); education (lecture notes and handouts before submission); legal (contract and appendices in one file); projects (chapters into a final document). Instead of five attachments, one merged PDF gives recipients everything in order.",
        ],
      },
      {
        heading: "How to merge PDF files online (step by step)",
        paragraphs: [
          "Step 1: Click Upload PDFs or drag files onto the upload area. Add two or more PDFs at once.",
          "Step 2: Files appear in a list with filename and page count. Drag items to rearrange — the final PDF follows this order top to bottom.",
          "Step 3: The first file in the list becomes the first pages of the merged document. Review order before merging.",
          "Step 4: Click Merge PDFs. The tool combines all pages in your browser.",
          "Step 5: Click Download to save the merged PDF. The process runs entirely in your browser — we never store your PDFs on our servers.",
        ],
      },
      {
        heading: "Tips for better results",
        paragraphs: [
          "Check page orientation before merging — mixed portrait and landscape is fine on screen but can look inconsistent in print.",
          "Compress large PDFs first with our PDF Compressor if the combined file must fit email limits, then merge.",
          "Name files clearly (e.g. 01-cover-letter.pdf, 02-resume.pdf) so sorting is easy.",
          "Keep originals: merging creates a new file; your source PDFs stay unchanged.",
          "Very large files (100MB+) depend on your device; typical documents merge quickly.",
        ],
      },
    ],
    features: [
      "Merge unlimited PDF files in one session",
      "Drag-and-drop reordering before merging",
      "Shows filename and page count per file",
      "Download merged PDF instantly",
      "Runs in your browser — files not uploaded to servers",
      "Free with no signup required",
    ],
    faqs: [
      {
        question: "Is this PDF merger really free?",
        answer: "Yes. Combine as many PDF files as you need at no cost. No account or payment required.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "There is no server-side limit because merging happens in your browser. Very large files may be slow depending on device memory; typical documents merge instantly.",
      },
      {
        question: "How many PDFs can I merge at once?",
        answer: "You can add as many files as you need — there is no hard cap on file count.",
      },
      {
        question: "Are my PDF files uploaded to your servers?",
        answer:
          "No. Merging runs entirely in your browser using JavaScript. Your documents are not sent to our servers.",
      },
      {
        question: "Can I change the page order after uploading?",
        answer:
          "Yes. Drag files in the list to change order before clicking Merge. The final PDF follows the list from top to bottom.",
      },
      {
        question: "Will passwords or restrictions be preserved?",
        answer:
          "Unlock password-protected PDFs first. The tool works with standard, unlocked PDF files.",
      },
      {
        question: "Can I merge PDFs on mobile?",
        answer: "Yes. Use your device file picker; the tool works in mobile browsers.",
      },
    ],
  },
  {
    slug: "image-compressor",
    sections: [
      {
        heading: "What is Image Compression?",
        paragraphs: [
          "Image compression reduces the file size of an image by removing data that the human eye cannot easily distinguish. The result is a smaller file that looks nearly identical to the original but loads faster on web pages, uses less storage, and uploads more quickly.",
          "Lossy compression (JPEG and WebP) discards some data permanently for much smaller files. The quality slider controls how much is removed — higher quality means a larger file; 75–85% is often indistinguishable from the original for web use.",
          "Lossless compression (PNG) removes redundant metadata without changing pixels. Size drops less than lossy, but quality is preserved. Our tool applies the right approach per format; you choose the quality level.",
        ],
      },
      {
        heading: "How to Compress an Image Online (Step by Step)",
        paragraphs: [
          "Step 1: Click the upload area or drag a JPEG, PNG, or WebP file onto the page.",
          "Step 2: Review the preview and current file size.",
          "Step 3: Use the quality slider — 80 is a good starting point; it often cuts size 50–70% with little visible change.",
          "Step 4: Compare before and after sizes. When satisfied, click Download. Your original file on disk is not modified.",
          "The process runs in your browser — your image is not uploaded to our servers.",
        ],
      },
      {
        heading: "How Much Can You Reduce Image File Size?",
        paragraphs: [
          "Results vary by image type and quality. As a guide: JPEG at 85% often yields 30–50% smaller files; at 75%, 50–65%; at 60%, 65–75%. PNG lossless often saves 10–30%. WebP at 80% can be 40–60% smaller than equivalent JPEG.",
          "Photos with gradients compress more than flat screenshots. A 3MB phone photo at quality 80 often becomes 400–700KB — fine for web and email.",
        ],
      },
      {
        heading: "When Should You Compress Images?",
        paragraphs: [
          "Before uploading to a website — large images hurt load speed and rankings. Before email — many servers cap attachments at 5–10MB. Before social posts — platforms recompress anyway; starting optimized helps. Before messaging apps — pre-compress for better control. During web or app development — every KB improves mobile load time.",
        ],
      },
    ],
    features: [
      "Compress JPEG, PNG, and WebP in your browser",
      "Quality slider for file size vs visual quality",
      "Real-time before/after file size comparison",
      "One-click download; original unchanged on your device",
      "No upload to servers — privacy-friendly",
      "Free with no signup required",
    ],
    faqs: [
      {
        question: "Is this image compressor really free?",
        answer: "Yes. Compress as many images as you like at no cost. No account or signup required.",
      },
      {
        question: "Does compressing reduce width and height?",
        answer:
          "This tool focuses on file size, not dimensions. Pixel size stays the same unless you also use our Image Resizer.",
      },
      {
        question: "Will anyone see my images?",
        answer: "No. Compression runs in your browser; images are not uploaded to our servers.",
      },
      {
        question: "What quality setting should I use?",
        answer:
          "For most web images, 75–85 works well. Use 85–90 for product or portfolio shots; 60–70 for thumbnails or backgrounds.",
      },
      {
        question: "Can I compress PNG images?",
        answer: "Yes. PNG handling is typically lossless — smaller files without visible quality loss.",
      },
      {
        question: "What is the maximum file size?",
        answer:
          "There is no hard server limit because processing is local. Very large files (20MB+) may be slower on low-memory devices.",
      },
      {
        question: "Can I compress multiple images at once?",
        answer:
          "If the tool supports batch upload, use it; otherwise process one at a time or refresh between files.",
      },
    ],
  },
  {
    slug: "uuid-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool generates UUIDs (Universally Unique Identifiers), also known as GUIDs. Each UUID is a 128-bit value usually displayed as a standard 36-character string (e.g. with hyphens). UUIDs are used as unique IDs in databases, APIs, and distributed systems.",
          "UUIDs are designed so that the chance of two being the same is astronomically low, even when generated on different machines.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Open the tool and click to generate one or more UUIDs. Copy the value(s) you need into your code, config, or database. Use \"bulk generate\" if you need many at once.",
        ],
      },
      {
        heading: "Benefits and use cases",
        paragraphs: [
          "No signup; generation happens in the browser. Useful for creating unique IDs for records, API tokens, or file names. Common in development, testing, and system design.",
        ],
      },
    ],
  },
  {
    slug: "base64-encoder",
    sections: [
      {
        heading: "What is Base64 Encoding?",
        paragraphs: [
          "Base64 converts binary data or text into a string of ASCII characters (A–Z, a–z, 0–9, +, /) so it can pass through systems that only handle text. It is not encryption — anyone can decode it.",
          "Common uses: embedding small images in HTML or CSS as data URLs; sending binary data inside JSON or XML APIs; MIME email attachments; avoiding characters that break parsers. Base64 grows size by about 33% — use it for compatibility, not to shrink files.",
        ],
      },
      {
        heading: "How to Use This Base64 Tool",
        paragraphs: [
          "To encode: choose Encode, paste plain text, copy the Base64 output.",
          "To decode: choose Decode, paste a Base64 string, read the plain text. Invalid Base64 shows an error.",
          "All processing runs in your browser — no data is sent to our servers.",
        ],
      },
    ],
    features: [
      "Encode text to Base64 and decode back to text",
      "Instant results in the browser",
      "Copy output in one click",
      "No signup; private local processing",
    ],
    faqs: [
      {
        question: "Is Base64 the same as encryption?",
        answer:
          "No. Base64 is encoding, not encryption. Anyone with a decoder can reverse it. Do not use Base64 to protect secrets.",
      },
      {
        question: "Why does Base64 end with = or ==?",
        answer: "That is padding so the encoded length is a multiple of four characters.",
      },
      {
        question: "Can I Base64 encode an image?",
        answer:
          "This tool is for text strings. For images as data URLs, use our Image to Base64 Converter.",
      },
      {
        question: "Is Base64 the same as URL encoding?",
        answer:
          "No. Base64 uses + and / which are not URL-safe. For query parameters, use our URL Encoder.",
      },
    ],
  },
  {
    slug: "word-counter",
    sections: [
      {
        heading: "What is a Word Counter?",
        paragraphs: [
          "A word counter is a simple utility that tells you how many words appear in your text. Most online versions also show characters (with and without spaces), sentences, and sometimes paragraphs. That matters because school essays, scholarship forms, blog platforms, and ad networks all enforce limits—and guessing leads to rejected submissions or cut-off titles.",
          "Our free word counter online is built for a “problem first” workflow: you paste or type, see live numbers, and edit until you are in range. Nothing uploads to our servers for counting, which makes it a strong word count tool without login when you are on a shared computer or handling private drafts.",
          "People also search for an online word counter with character count when they write SEO meta titles, tweet threads, or SMS-style alerts. One screen with words + characters saves toggling between menus in a word processor. If you need a fast word counter tool that respects your time, browser-based counters beat opening heavy apps for a thirty-second check.",
        ],
      },
      {
        heading: "How to Use This Tool?",
        paragraphs: [
          "Step 1: Copy your text from any app (Google Docs, Word, Notion, email) or start typing directly in the box.",
          "Step 2: Watch the live word count and character count update—no button to press for each refresh.",
          "Step 3: Check sentences and paragraphs if your rubric mentions structure, not just length.",
          "Step 4: Tighten vague sentences or add evidence until you meet the minimum or maximum.",
          "Step 5: Copy the finished text back to your document and submit—our page does not keep a copy of your essay.",
        ],
      },
      {
        heading: "Why Use a Word Counter?",
        paragraphs: [
          "For students: a word counter for essay writing helps you stay inside limits without printing or exporting. You can paste one section at a time to see where a long paragraph blows your budget, then fix that section only.",
          "For SEO and marketing: Google snippets and social networks care about character width, not just ideas. Pasting headline and description variants into a word counter copy paste online flow lets you compare length side by side before publishing.",
          "For anyone else—journalists, translators, job seekers—the same tool answers “how long is this?” in seconds, which is why a dedicated counter beats counting manually or relying on hidden status bars.",
        ],
      },
    ],
    features: [
      "Free word counter online—no registration",
      "Words, characters (with/without spaces), sentences, paragraphs",
      "Live updates as you edit",
      "Word counter for paragraphs and long-form text",
      "Private: processing in your browser",
    ],
    faqs: [
      {
        question: "Is this word counter free?",
        answer: "Yes. Use it as much as you want without payment or signup.",
      },
      {
        question: "Is my data saved on your servers?",
        answer:
          "No. Counting runs in your browser—we do not store your essay, story, or pasted text on our servers.",
      },
      {
        question: "How accurate is the word count?",
        answer:
          "We split on whitespace and punctuation rules typical for English-like text. For unusual languages or special formatting, compare once with your editor if your grader is strict.",
      },
      {
        question: "Can I use it for college essays?",
        answer:
          "Yes. It is a popular word counter for essay writing and abstracts—paste your draft and adjust until you meet the requirement.",
      },
    ],
  },
  {
    slug: "split-pdf",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The split PDF tool divides one PDF into multiple files. You can extract a range of pages (e.g. 1–5) or save each page as its own file. Splitting is done in the browser; your file is not uploaded to our servers.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Upload your PDF, then choose to split by page range or one file per page. Download the resulting PDFs. Use cases: extracting chapters, separating scans, or splitting a combined document back into individual files.",
        ],
      },
    ],
  },
  {
    slug: "hash-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The hash generator computes MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from text. Hashes are fixed-length fingerprints used for checksums, integrity checks, and some security workflows. Generation runs in the browser.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Enter or paste text and select the hash algorithm(s). Copy the resulting hash. Use cases: verifying file or message integrity, generating checksums, or following tutorials that require a hash of a string.",
        ],
      },
    ],
  },
  {
    slug: "pdf-to-word",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool extracts text from a PDF and gives you a Word (.docx) document. It’s useful when you need to edit PDF content in Word or reuse the text. Processing runs in your browser; the PDF is not uploaded to our servers.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Upload a PDF file. The tool extracts the text and builds a Word document for download. Best for text-based PDFs; complex layouts or images may not transfer perfectly. Use cases: editing a contract, reusing a report, or converting a PDF form to an editable document.",
        ],
      },
    ],
  },
  {
    slug: "word-to-pdf",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The Word to PDF converter turns a .docx file into a PDF. You upload the Word document and download the resulting PDF. Conversion happens in your browser so your file stays on your device.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Select a Word (.docx) file. Wait for the conversion to finish and download the PDF. Use cases: creating a PDF for submission, sharing a read-only version of a document, or archiving in a standard format.",
        ],
      },
    ],
  },
  {
    slug: "compress-pdf",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The compress PDF tool reduces the file size of a PDF, often by lowering image resolution or optimizing the structure. Smaller PDFs are easier to email or upload. Compression runs in your browser.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Upload your PDF and start compression. Download the smaller file. Use cases: meeting size limits for email or uploads, speeding up loading on the web, or saving storage space.",
        ],
      },
    ],
  },
  {
    slug: "add-watermark-pdf",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool adds a text watermark to every page of your PDF (e.g. \"DRAFT\" or \"CONFIDENTIAL\"). You choose the text, position, and opacity. Processing is done in your browser.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Upload the PDF, enter the watermark text, and adjust options. Download the watermarked PDF. Use cases: marking drafts, branding documents, or indicating confidentiality.",
        ],
      },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The Lorem Ipsum generator produces placeholder text in paragraphs, sentences, or words. Designers and developers use it to fill layouts and mockups without real content.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Filling wireframes, mockups, or templates. Testing typography and layout. Demonstrating a design to a client before copy is ready.",
        ],
      },
    ],
  },
  {
    slug: "random-number-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool generates random numbers within a range you set. You can get one number or many, with or without duplicates. Useful for games, sampling, or any case where you need random integers.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Games, raffles, or draws. Picking random samples for testing. Generating random IDs or codes within a range.",
        ],
      },
    ],
  },
  {
    slug: "url-encoder",
    sections: [
      {
        heading: "What is URL Encoding?",
        paragraphs: [
          "URL encoding (percent encoding) turns characters that are not allowed in URLs into a safe form: a % followed by two hex digits (e.g. space → %20, & → %26). That way browsers and servers transmit values correctly.",
          "URLs only allow a limited character set per RFC 3986. Spaces, #, &, and = have special meaning in URLs, so literal data must be encoded. Typical uses: search queries in ?q=, passing emails or paths as parameters, GET form data, debugging broken links, API query strings with user input.",
        ],
      },
      {
        heading: "How to Use This URL Encoder / Decoder",
        paragraphs: [
          "Encode: open Encode, paste text with spaces or special characters, copy the percent-encoded result.",
          "Decode: open Decode, paste something like hello%20world%21, read the readable text.",
          "Encode only parameter values, not an entire URL — otherwise you would encode :// and ? which are structural.",
        ],
      },
    ],
    features: [
      "Percent-encode and decode strings",
      "Instant results in the browser",
      "No signup; local processing",
    ],
    faqs: [
      {
        question: "What is the difference between %20 and + for spaces?",
        answer:
          "%20 is standard percent encoding. + means space in application/x-www-form-urlencoded (HTML forms). For paths prefer %20; forms often use +.",
      },
      {
        question: "Should I encode an entire URL?",
        answer:
          "Encode only the values inside query parameters, not the full URL structure.",
      },
      {
        question: "Which characters do not need encoding?",
        answer:
          "Letters, digits, and - _ . ~ are unreserved and usually safe unencoded.",
      },
      {
        question: "Is URL encoding the same as Base64?",
        answer:
          "No. URL encoding uses % for unsafe characters; Base64 is a different alphabet for binary-as-text.",
      },
    ],
  },
  {
    slug: "image-resizer",
    sections: [
      {
        heading: "What is an image resizer?",
        paragraphs: [
          "An image resizer changes width and height so your photo fits a layout, platform, or file-size budget. Our image resizer online free tool lets you set exact pixels or a percentage scale, often with an aspect ratio lock so subjects are not stretched. Resize image for Instagram posts, stories, shop thumbnails, or email signatures without installing software.",
          "Downscaling usually improves sharpness per pixel on screens; upscaling can soften detail, so start from the largest source file you have. For social networks, each channel has informal “safe” dimensions—use this tool to hit your target width and height quickly.",
        ],
      },
      {
        heading: "How to use this resizer",
        paragraphs: [
          "Step 1: Upload your image from your device.",
          "Step 2: Enter target width and height in pixels, or choose a percentage resize.",
          "Step 3: Toggle aspect ratio lock if you want to avoid distortion.",
          "Step 4: Preview the result, then download the resized file.",
          "Step 5: Upload to your app or CMS; repeat for batches if you have multiple assets.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "You meet strict dimension requirements for ads, marketplaces, and social feeds. Local processing keeps drafts private. Combined with our compressor, you can both resize image for Instagram and shrink bytes for faster loads.",
        ],
      },
      {
        heading: "Typical use cases",
        paragraphs: [
          "Profile photos, product shots, blog images, presentation slides, and screenshots. If you need photo resizer workflows without Photoshop, this page is a fast alternative.",
        ],
      },
    ],
    features: [
      "Image resizer online free—pixels or percent",
      "Optional aspect ratio lock",
      "Browser-based; no signup",
      "Great to resize image for Instagram and web",
      "Pairs well with compression for lighter files",
    ],
    faqs: [
      {
        question: "Will resizing reduce quality?",
        answer:
          "Making an image smaller discards pixels; that is usually fine for web. Enlarging an image cannot add real detail and may look soft.",
      },
      {
        question: "Can I keep proportions?",
        answer:
          "Yes. Use the aspect ratio lock so width and height stay proportional when you change one dimension.",
      },
      {
        question: "Do you store my uploads?",
        answer:
          "Resizing happens in your browser; we do not upload your images to our servers for this tool.",
      },
      {
        question: "What about Instagram sizes?",
        answer:
          "Use the pixel fields to match your template (feed, story, or reel). Always verify in-app crop preview before posting.",
      },
    ],
  },
  {
    slug: "png-to-jpg",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool converts PNG images to JPG/JPEG. You can often adjust quality to balance file size and appearance. Conversion happens in your browser.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Reducing file size when transparency isn’t needed. Preparing photos for web or print in a widely supported format.",
        ],
      },
    ],
  },
  {
    slug: "jpg-to-webp",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The JPG to WebP converter turns JPEG images into WebP format, which usually gives smaller file size at similar quality. WebP is supported by modern browsers and helps with faster page loads.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Optimizing images for websites. Saving bandwidth and storage while keeping good visual quality.",
        ],
      },
    ],
  },
  {
    slug: "image-crop",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The image crop tool lets you select an area of an image and download the cropped result. Useful for focusing on a subject, removing borders, or fitting an image to a specific aspect ratio.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Creating profile pictures or avatars. Cropping screenshots or photos to the important area. Adapting images to fixed dimensions for layouts.",
        ],
      },
    ],
  },
  {
    slug: "resume-templates",
    sections: [
      {
        heading: "What does this resume and CV builder include?",
        paragraphs: [
          "You get fifteen distinct visual templates (including photo-forward headers, sidebars, tech and academic styles, and a Europass-inspired blue layout), optional profile photo upload, dedicated fields for languages and certifications, and a live preview aligned with your HTML download.",
          "The format strip at the top switches section titles for different markets: International, Europass-style, US résumé, UK CV, DE/AT/CH, and ATS simple. Choosing Europass-style selects the EU-blue template automatically; you can still pick any other look.",
          "Exports are standard .docx and .html files generated in your browser—we do not upload your text or images.",
        ],
      },
      {
        heading: "Downloading and editing",
        paragraphs: [
          "Download .docx for Word, Google Docs, or LibreOffice. Download .html for a portable file you can edit or print to PDF from the browser.",
          "The preview scrolls inside its panel so long CVs stay comfortable to read beside the form.",
        ],
      },
      {
        heading: "Photos, ATS, and proofreading",
        paragraphs: [
          "Photos are common on EU CVs and optional on US résumés—follow employer norms in your region.",
          "ATS simple plus a clean template helps parsers; always verify the final PDF or Word file in your target system if possible.",
        ],
      },
    ],
    features: [
      "15 templates: Mercury, Teal, Executive, Swiss, Sidebar, Coral, Tech, Academic, EU blue, Metro, Aurora, Timeline, Magazine, Photo hero, Engineer",
      "Format presets with matching headings",
      "Photo, website, languages, certifications, job-applied-for (Europass-style)",
      "Editable .docx and .html",
      "Runs locally in your browser",
    ],
    faqs: [
      {
        question: "Is the Europass-style option an official Europass file?",
        answer:
          "No. It mirrors familiar section labels and styling. Official Europass outputs come from the European Commission tools. Here you get normal Word/HTML you can edit anywhere.",
      },
      {
        question: "Can I add a photo?",
        answer: "Yes. JPG, PNG, or WebP; shown in preview, HTML, and Word when supported.",
      },
      {
        question: "Is it free?",
        answer: "Yes. No payment or account is required.",
      },
      {
        question: "Do you store my CV?",
        answer: "No. Generation happens on your device.",
      },
    ],
  },
  {
    slug: "image-to-base64",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This tool converts an image to a Base64 data URL. You can copy the result and embed it in HTML or CSS, or use it in APIs. Conversion runs in your browser.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Embedding small images inline in HTML or CSS. Including images in JSON payloads. Testing or prototyping without hosting image files.",
        ],
      },
    ],
  },
];

export function getToolGuide(slug: string): ToolGuide | undefined {
  return TOOL_GUIDES.find((g) => g.slug === slug);
}
