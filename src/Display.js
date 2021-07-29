const DisplayPhotos = (props) => {
    const { photos } = props;
    return (
        <section>
            <h2>Your search results</h2>
            <div className="photos">

                {
                    photos.length > 0 ? photos.map((photoObj) => {
                        return (
                            <div className="photo-container" key={photoObj.id}>
                                <img src={photoObj.urls.small} alt={photoObj.alt_description} />
                            </div>
                        )
                    }) : <div className="no-results-imafraid"><p>I'm afraid your search was fruitless</p></div>}
            </div>
        </section>
    )
}
export default DisplayPhotos;