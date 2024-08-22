import axios from 'axios';

export const getNewsList = async (category) => {
    try {
        const response = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/${category}`);
        return response.data.data; 
    } catch (error) {
        console.error("Error fetching news list:", error);
        throw error;
    }
};

export const searchNews = async (q) => {
    try {
        const response = await axios.get(`${q}`);
        return response.data.data; 
    } catch (error) {
        console.error("Error searching news:", error);
        throw error;
    }
};
