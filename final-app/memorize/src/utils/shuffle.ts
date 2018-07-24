export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;
    const shuffled = array.slice(); // copy array

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
    }

    return shuffled as T[];
}