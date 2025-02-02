export const parseStoreString = (storeString: string) => {
    const match = storeString.match(/Store\(id=(.*?), name=(.*?), location=(.*?), menu_id=(.*?)\)/);
    if (match) {
      return {
        id: match[1] || null,
        name: match[2] || null,
        location: match[3] || null,
        menu_id: match[4] || null,
      };
    }
    return null;
  };