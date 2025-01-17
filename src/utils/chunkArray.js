export const chunkArrayWithPattern = (array, pattern) => {

    const chunks = [];
    let currentIndex = 0;

    while(currentIndex < array.length) {
        pattern.forEach((size) => {
            if(currentIndex < array.length) {
                chunks.push(array.slice(currentIndex, currentIndex + size));
                currentIndex += size;
            }
        });
    }

    return chunks;
}
