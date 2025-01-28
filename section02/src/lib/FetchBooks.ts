export default async function FetchBooks(q?:string): Promise<BookData[]> {
    let url = `http://localhost:12345/book`;

    if (q) {
        url = `/seatch?q=${q}`;
    }

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Failed to fetch");
        }

        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}