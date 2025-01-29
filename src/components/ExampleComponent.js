import React, { useEffect, useState } from 'react';
import { fetchData, postData } from '../api/apiService';

const ExampleComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData('/example-endpoint');
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    const handlePostData = async () => {
        try {
            const result = await postData('/example-endpoint', { key: 'value' });
            console.log('Post result:', result);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h1>Example Component</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <button onClick={handlePostData}>Post Data</button>
        </div>
    );
};

export default ExampleComponent;