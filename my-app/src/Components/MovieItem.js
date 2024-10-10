const MovieItem = (props)=>{
    return(
        <div>
            <h2>{props.myMovie.title}</h2>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
        </div>
    );
}

export default MovieItem;