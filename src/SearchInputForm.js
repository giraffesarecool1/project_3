import React, { useState } from 'react';
import axios from 'axios';
import DisplayPhotos from './Display.js';
function SearchInputForm() {
    const [formData, updateFormData] = useState('');
    const [allPhotos, setAllPhotos] = useState([]);
    const [firstSubmitTracker, setFirstSubmit] = useState(0);

    const handleChange = (e) => {
        updateFormData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setFirstSubmit(1);
        axios({
            url: 'https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'K3rRULb00Plv3_6vx3jb1DrKutlVMxLCdwDnF8MpFHQ',
                query: formData,
                per_page: 10,
                page: 1
            }
        }).then((response) => {
            const PhotoArray = response.data.results;
            setAllPhotos(PhotoArray);
            console.log(allPhotos);
        })
    }

    return (
        <div className="App">
            <label>
            Your search query here
            <input name="username" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        
        {firstSubmitTracker == 1 && <DisplayPhotos photos={allPhotos} />}
        </div>
    );

};

export default SearchInputForm;