import axios from 'axios';
import config from '../../config';

const apiClient = axios.create({
    baseURL: config.apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const uploadImage = async (storeId, imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await apiClient.post(`/stores/${storeId}/menu/image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const updateStore = async (storeId, data) => {
    try {
        const response = await apiClient.put(`/stores/${storeId}`, data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const deleteStore = async (storeId) => {
    try {
        const response = await apiClient.delete(`/stores/${storeId}`);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

// You can add more API request methods as needed