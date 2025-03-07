export declare function fetchData(endpoint: string): Promise<any>;
export declare function postData(endpoint: string, data: any): Promise<any>;
//export declare function uploadImage(storeId: string, imageFile: File): Promise<any>;
export declare function updateStore(storeId: string, data: any): Promise<any>;
export declare function deleteStore(storeId: string): Promise<any>;
export declare function updateMenu(menuId: string, data: any): Promise<any>;
export declare function deleteMenu(menuId: string): Promise<any>;
export declare function updateMenuItem(menuItemId: string, data: any): Promise<any>;
export declare function deleteMenuItem(menuItemId: string): Promise<any>;