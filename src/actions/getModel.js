import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
    baseURL: '/api', // This will be proxied
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getModel = async (prompt) => {
    console.log('Sending request to server:', prompt);
    const payload = {
        upload_files: true,
        prompt: "blue car",
        max_attempts: 1,
        max_rotations: 1,
        score_threshold: 0,
        output_dir: "autoppia-react-app",
        upload_files: true,
        // debug: false
    };

    try {
        const response = await apiClient.post('/process', payload);
        console.log('Response from server:', response.data);
        return response.data.s3_glb_path
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Full axios error:', error);
            console.error('Response data:', error.response?.data);

            if (error.response?.data) {
                throw new Error(`Server error: ${JSON.stringify(error.response.data)}`);
            }
            throw new Error(`Network error: ${error.message}`);
        }
        throw error;
    }
};