import Movie from './movie'

const Movies = (props) => {
    return (<ul className="container">
        {props.moviesArray.map((item, index) => (
            <Movie/>
        ))}
    </ul>)
}

export default Movies
