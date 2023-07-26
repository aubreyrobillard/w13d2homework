const Movie = (name, image, rating, year) => {
    return ( <ul className="Movie">
        <li>name={name}</li>
        <li>year={year}</li>
        <li>rating={rating}</li>
        <li><image src={image} alt={name}></image></li>
    </ul>
    )
}

export default Movie