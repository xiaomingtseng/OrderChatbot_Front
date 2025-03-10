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

// export const uploadImage = async (storeId, imageFile) => {
//     const formData = new FormData();
//     formData.append('image', imageFile);

//     try {
//         const response = await apiClient.post(`/stores/${storeId}/menu/image`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.error('There has been a problem with your axios operation:', error);
//         throw error;
//     }
// };

export const updateStore = async (storeId, data) => {
    try {
        //不能把原本的DATA直接傳進去，因為會回傳404
        //不能傳入_id，因為會回傳500
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

export const updateMenu = async (menuId, data) => {
    try {
        const response = await apiClient.put(`/menus/${menuId}`, data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const deleteMenu = async (menuId) => {
    try {
        const response = await apiClient.delete(`/menus/${menuId}`);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const updateMenuItem = async (menuItemId, data) => {
    try {
        const response = await apiClient.put(`/menu_items/${menuItemId}`, data);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};

export const deleteMenuItem = async (menuItemId) => {
    try {
        const response = await apiClient.delete(`/menu_items/${menuItemId}`);
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        throw error;
    }
};
// You can add more API request methods as needed