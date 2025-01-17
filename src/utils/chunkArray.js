export const chunkArrayWithPattern = (array, pattern) => {
    const chunks = [];
    let currentIndex = 0;

    while (currentIndex < array.length) {
        for (const size of pattern) {
            if (currentIndex < array.length) {
                const chunk = array.slice(currentIndex, currentIndex + size);
                chunks.push(chunk);
                currentIndex += size;
            }
        }
    }

    return chunks;
};
