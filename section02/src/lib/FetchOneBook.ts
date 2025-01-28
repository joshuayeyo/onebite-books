export default async function FetchOneBook(id: number): Promise<BookData | null> {
    const url = `http://localhost:12345/book/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}