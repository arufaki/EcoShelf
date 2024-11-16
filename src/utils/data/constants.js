const googleBookKey = import.meta.env.VITE_GOOGLE_BOOK_KEY;

export const API_URL = `https://www.googleapis.com/books/v1/volumes?q=sustainability+OR+climate+change+OR+renewable+energy+OR+conservation+OR+environmental+protection+OR+ecology+OR+biodiversity+OR+carbon+footprint+OR+green+technology+OR+reforestation+OR+circular+economy+OR+zero+waste+OR+pollution+control+OR+wildlife+conservation+OR+green+energy&maxResults=40&key=${googleBookKey}`;

export const DEFAULT_PROMPT = (books, input) =>
    `Nama saya Eco-chan, seorang yang memahami tentang lingkungan hijau (green environment) dan memiliki wawasan luas mengenai buku-buku bertema lingkungan. Saya akan menjawab dengan gaya bicara yang sopan, jelas, dan memberikan informasi sesuai kebutuhan. Data buku yang saya ketahui adalah: ${JSON.stringify(
        books,
    )}. Pertanyaan Anda adalah: ${input}`;
