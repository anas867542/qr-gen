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
}

export const TOOL_GUIDES: ToolGuide[] = [
  {
    slug: "qr-code-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "This free QR code generator lets you create QR codes for websites (URLs), plain text, or Wi‑Fi network details. You can customize the size and colors, then download the result as a PNG image. No account or signup is required; everything runs in your browser.",
          "QR codes are two-dimensional barcodes that smartphones can scan to open a link, display text, or connect to Wi‑Fi. They are used in marketing, menus, events, and product packaging.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Choose the type: URL, Text, or Wi‑Fi. For URL, enter the website address (we add https:// if needed). For Text, enter any short message. For Wi‑Fi, enter the network name (SSID), password, and security type. Adjust the size with the slider and pick foreground and background colors if you like. Click \"Generate QR code\" and the preview updates. Use \"Download PNG\" to save the image.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Free and private: no data is sent to any server. Instant generation in the browser. Custom colors help match your brand. Supports the most common use cases: links, text, and Wi‑Fi.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Marketing: put a QR code on flyers or posters linking to your website or landing page. Restaurants: create a QR code that opens your digital menu. Events: share Wi‑Fi with guests via a printed QR code. Business cards: link to your portfolio or contact page. Product packaging: point customers to manuals, registration, or support.",
        ],
      },
    ],
  },
  {
    slug: "password-generator",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The password generator creates strong, random passwords for your accounts. You choose the length and which character sets to include (uppercase, lowercase, numbers, symbols). The tool runs in your browser so nothing is sent over the internet.",
          "Strong passwords are long, random, and use a mix of character types. This makes them harder to guess or crack than simple words or dates.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Set the desired length (e.g. 16 or 20 characters). Check the boxes for the character types you want: uppercase letters, lowercase letters, numbers, and symbols. Click generate to get a new password. Copy it and store it in a password manager or use it when creating an account. Generate again whenever you need a new password.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "No signup and no data leaves your device. You can create as many passwords as you need. Customizable length and character sets help meet different site requirements (e.g. \"must include a symbol\").",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Creating new accounts for email, social media, or services. Replacing weak or reused passwords. Generating temporary or one-time passwords. Meeting password policies that require symbols and numbers.",
        ],
      },
    ],
  },
  {
    slug: "json-formatter",
    sections: [
      {
        heading: "What is this tool?",
        paragraphs: [
          "The JSON formatter and validator helps developers and anyone working with JSON data. Paste minified or messy JSON and the tool formats it with indentation and line breaks so it’s easier to read. It also checks for syntax errors and reports where the problem is.",
          "JSON (JavaScript Object Notation) is used in APIs, config files, and web apps. Valid, well-formatted JSON is easier to debug and maintain.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Paste your JSON string into the input area. The tool will format it and highlight any syntax errors (e.g. missing commas, extra brackets). Fix the reported issues and format again until the output is valid. You can copy the formatted result for use in your project.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Runs in the browser; your JSON is not uploaded to a server. Instant formatting and validation. Clear error messages help you fix invalid JSON quickly.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Formatting API responses for readability. Validating JSON before sending to a server. Debugging config files or data exports. Learning JSON structure by seeing properly indented output.",
        ],
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
        heading: "What is this tool?",
        paragraphs: [
          "The image compressor reduces the file size of JPEG, PNG, or WebP images so they load faster on websites or use less storage. You can adjust quality or dimensions; the tool runs in your browser and does not upload images to a server.",
          "Smaller images mean faster page loads and lower bandwidth, which improves user experience and can help with SEO.",
        ],
      },
      {
        heading: "How to use it",
        paragraphs: [
          "Select one or more images from your device. Choose quality or size options if the tool offers them. Run the compression and compare the result. Download the compressed image(s) when you’re satisfied.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Privacy-friendly: processing happens locally. No account required. Useful for photos, avatars, and graphics before uploading to a site or app.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Preparing images for a website or blog. Reducing attachment size for email. Freeing up space on a device. Optimizing images for social media or listings.",
        ],
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
        heading: "What is this tool?",
        paragraphs: [
          "The word counter counts words, characters, sentences, and paragraphs in your text. It updates as you type or paste, so you can stay within limits for essays, social posts, or forms. All counting is done in your browser; nothing is sent to a server.",
        ],
      },
      {
        heading: "How to use it and use cases",
        paragraphs: [
          "Paste or type your text in the box. The tool shows word count, character count (with and without spaces), and often sentence and paragraph counts. Use it for essays, tweets, meta descriptions, or any place with a character or word limit.",
        ],
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
        heading: "What is this tool?",
        paragraphs: [
          "The image resizer changes the dimensions of an image by pixels or percentage. You can keep the aspect ratio or set exact width and height. Resizing runs in your browser.",
        ],
      },
      {
        heading: "Use cases",
        paragraphs: [
          "Preparing images for web or email size limits. Creating thumbnails. Resizing screenshots or photos for profiles and listings.",
        ],
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
