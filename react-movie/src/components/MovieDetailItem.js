const MovieDetailItem = (prop) => {
  const {detailData} = prop;

  return (
    <>
      <h3>{detailData.title} ({detailData.year})</h3>
      <figure>
        <img src={detailData.large_cover_image} alt={detailData.title} />
      </figure>
      <div>
        <strong>Genres</strong> : {detailData.genres.map((item, index) => (`#${item} `))} <br />
        <strong>Rating</strong> : {detailData.rating} <br />
        <strong>Language</strong> : {detailData.language} <br />
        <strong>RunTime</strong> : {detailData.runtime} minutes <br />
        <p className="description">{detailData.description_full}</p>
      </div>
    </>
  )
}

export default MovieDetailItem;
