import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
const getGenres = (list)=>{
    var idx = 0;
    const li = list.map(genre => {
        idx++;
        return (
            <li key={idx}>
                {genre}
            </li>
        )
    })
    return li;
}
const Movie = ({id,year,title,summary,poster,genres,click,selection,back})=>{
    return (
        <div className={`movie ${selection === id ? 'active':''}`} onClick={()=>click(id)}>
            <div>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <div className="movie_title">
                        {title}
                    </div>
                    <div className="movie_yaer">
                        {year}
                    </div>
                    <ul className="movie_genres">
                        {getGenres(genres)}    
                    </ul>   
                    <div className="movie_summary">
                        {summary.length > 200 ? summary.slice(0,200)+"..." : summary}
                    </div>
                    
                </div>
                <input type="button" value="back" onClick={back} className={`back ${selection === id ? 'active':''}`}/>
            </div>
            
        </div>
    )
}
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;