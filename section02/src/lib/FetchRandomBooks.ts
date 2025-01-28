export default async function FetchRandomBooks(): Promise<BookData[]> {
    const url = `http://localhost:12345/book/random`;

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