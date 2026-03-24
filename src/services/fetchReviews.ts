export async function fetchReviews() {
    try {
        const response = await fetch('https://gist.githubusercontent.com/alexandru-albici-ptt/9aeb510cad8e13428c2acf5e2d6261e7/raw/reviews.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}