const googleBookKey = import.meta.env.VITE_GOOGLE_BOOK_KEY;

const API_URL = `https://www.googleapis.com/books/v1/volumes?q=sustainability+OR+climate+change+OR+renewable+energy+OR+conservation+OR+environmental+protection+OR+ecology+OR+biodiversity+OR+carbon+footprint+OR+green+technology+OR+reforestation+OR+circular+economy+OR+zero+waste+OR+pollution+control+OR+wildlife+conservation+OR+green+energy&maxResults=40&key=${googleBookKey}`;

export default API_URL;
