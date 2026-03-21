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
        heading: "What is a JSON formatter?",
        paragraphs: [
          "A JSON formatter (often called a JSON beautifier and validator) takes compact or messy JSON text and pretty-prints it with indentation so objects and arrays are easy to scan. Our JSON formatter online free tool also checks syntax: missing commas, stray quotes, or unbalanced brackets show up as validation errors so you can fix them quickly. JSON is the lingua franca of web APIs, mobile apps, and many config files—so a fast JSON viewer free experience saves hours when debugging payloads or reading third-party responses.",
          "Whether you need json pretty print online for a Slack snippet or format json online tool output before committing to Git, the goal is the same: readable structure plus confidence that the document is valid JSON.",
        ],
      },
      {
        heading: "How to use this JSON tool",
        paragraphs: [
          "Step 1: Copy your minified API response, config blob, or file contents into the input area.",
          "Step 2: Run format / validate. The tool indents nested objects and arrays for a clear JSON tree view.",
          "Step 3: Read any error message and line hint; common issues include trailing commas (not allowed in strict JSON), single quotes instead of double quotes, or unescaped characters.",
          "Step 4: Fix the source and validate again until no errors appear.",
          "Step 5: Copy the formatted JSON for documentation, tickets, or your codebase.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "You get instant feedback without installing desktop software. Because parsing runs in the browser, sensitive payloads are not uploaded to our servers as part of formatting—ideal for internal API samples. Developers, QA, and technical writers all benefit from a single json beautifier and validator workflow.",
        ],
      },
      {
        heading: "Typical use cases",
        paragraphs: [
          "Debugging REST and GraphQL responses, cleaning up logs, preparing examples for documentation, validating config before deployment, and teaching JSON structure to students. If you searched for json formatter online free or json viewer free, this page combines readability and validation in one place.",
        ],
      },
    ],
    features: [
      "Format JSON online with indentation (pretty print)",
      "Validate JSON and surface syntax errors",
      "Works in the browser—no signup",
      "Copy-paste friendly for API work",
      "Helpful for configs, logs, and tutorials",
    ],
    faqs: [
      {
        question: "Is this JSON formatter free?",
        answer: "Yes. Format and validate as often as you like at no cost.",
      },
      {
        question: "Do you upload my JSON to a server?",
        answer:
          "Formatting and validation run locally in your browser; your pasted data is not sent to our servers for processing.",
      },
      {
        question: "Why does valid JavaScript object literal fail?",
        answer:
          "Strict JSON requires double quotes around keys and strings and does not allow trailing commas or comments. Convert those to valid JSON first.",
      },
      {
        question: "Can I use this for large files?",
        answer:
          "Very large pastes may slow your browser. For huge files, consider streaming tools or local editors—but for typical API payloads this tool works well.",
      },
    ],
  },
  {
    slug: "merge-pdf",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The merge PDF tool combines multiple PDF files into one. You select the order of the files and the tool produces a single PDF for download. Processing is done in your browser; files are not uploaded to our servers.",
          "Merging is useful when you have several documents (e.g. reports, chapters, scans) that you want as one file for sharing or printing.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Click to select one or more PDF files from your device. They appear in a list; drag to reorder if needed. Click merge and wait for the process to finish. Download the merged PDF. You can repeat with a new set of files anytime.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "No signup; no server upload. Works offline after the page loads. Keeps file order under your control. No page limit for typical use.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Combining invoices or receipts into one PDF. Merging chapters into a single ebook or report. Putting together scanned pages in order. Creating one PDF from multiple exports or prints.",
        ],
      },
    ],
  },
  {
    slug: "image-compressor",
    sections: [
      {
        heading: "What is an image compressor?",
        paragraphs: [
          "An image compressor reduces file size by adjusting encoding quality and, in some workflows, dimensions—so pages load faster and attachments stay under limits. Our image compressor fast online experience runs locally: you choose images, set how aggressive compression should be, and download lighter files. Many people search for compress image without losing quality; in practice you trade a small amount of detail for much smaller bytes, which is usually invisible on the web when settings are sensible.",
          "Smaller images improve Core Web Vitals and user experience, which supports SEO and conversion. Whether you need compress image online free for a portfolio or product photos, the goal is predictable file weight without re-shooting assets.",
        ],
      },
      {
        heading: "How to use this compressor",
        paragraphs: [
          "Step 1: Add one or more JPEG, PNG, or WebP files from your device.",
          "Step 2: Choose quality or preset options if available—start moderate and tighten if you need smaller files.",
          "Step 3: Run compression and compare before/after size (and visually zoom in if quality matters).",
          "Step 4: Download the optimized images and upload them to your site, marketplace, or email.",
          "Step 5: Keep originals archived separately if you might need maximum quality later.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "You avoid slow uploads on mobile networks, reduce storage costs, and meet platform size caps. Because processing stays in the browser, product or client images are not sent to us for compression—useful for privacy. This is a practical free image compression option for bloggers, sellers, and developers alike.",
        ],
      },
      {
        heading: "Common use cases",
        paragraphs: [
          "Blog and landing page hero images, ecommerce thumbnails, email newsletters, chat attachments, and social posts. If you searched for image compressor fast online or compress image without losing quality, start with a balanced quality setting and iterate.",
        ],
      },
    ],
    features: [
      "Compress image online free in the browser",
      "Supports common formats (JPEG, PNG, WebP)",
      "Adjust quality to balance size and clarity",
      "No signup; quick download",
      "Helps pages load faster (SEO-friendly)",
    ],
    faqs: [
      {
        question: "Is compression really free?",
        answer: "Yes. Compress images without a paid plan or account.",
      },
      {
        question: "Do you upload my photos?",
        answer:
          "Compression runs locally in your browser; your files are not sent to our servers for processing.",
      },
      {
        question: "Will my image look worse?",
        answer:
          "Strong compression can add artifacts. Use a moderate setting for photos you care about, and always preview before replacing originals.",
      },
      {
        question: "Is PNG or JPEG better for photos?",
        answer:
          "JPEG is usually smaller for photos; PNG is better for graphics with sharp edges or transparency. Pick the format that matches your subject.",
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
        heading: "What is this tool?",
        paragraphs: [
          "The Base64 encoder and decoder converts text or binary data to Base64 encoding and back. Base64 is often used to embed small images or data in URLs, HTML, or JSON without breaking the format. This tool works with text input and output in the browser.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Paste or type text in the input, then encode or decode as needed. Copy the result for use in your project. Common uses: embedding small images as data URLs, encoding credentials or tokens for APIs, and debugging payloads.",
        ],
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
        heading: "What is this tool?",
        paragraphs: [
          "The URL encoder and decoder converts special characters in strings to percent-encoded form (and back). Needed when building URLs or handling form data so that characters like spaces and ampersands are transmitted correctly.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Encoding query parameters, form values, or path segments. Decoding URLs or API responses to read the original string.",
        ],
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
