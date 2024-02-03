import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


function MovieConatinDetails() {
    const { name } = useParams();
    const { search } = useParams();
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=5da93ac9&t=${name}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [name, search]);
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container>
                <div className="bg-white">
                    <Row>
                        <Col>
                            <img src={user.Poster} alt="" className="mx-5 my-5" />
                        </Col>
                        <Col className="mx-5 my-5" >
                            <p>Movie Name: {user.Title}</p>
                            <p>Movie Year: {user.Year}</p>
                            <p>Movie Released: {user.Released}</p>
                            <p>Movie Genre: {user.Genre}</p>
                            <p>Movie Director: {user.Director}</p>
                            <p>Movie Writer: {user.Writer}</p>
                            <p>Movie Actors: {user.Actors}</p>
                            <p>Movie Plot: {user.Plot}</p>
                            <p>Movie Language: {user.Language}</p>
                        </Col>
                    </Row>
                    <button className="text-center"><Link to={`/movie/${name}`} >back</Link></button>
                </div >
            </Container >
        </>
    )
}

export default MovieConatinDetails
