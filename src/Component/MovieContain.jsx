import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './MovieContain.css'
import Contain from './Contain';
import NoContain from './NoContain';
function Movies() {
    const { search, page } = useParams();
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [data1, setData1] = useState(10);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = `5da93ac9`;
                const response = await axios.get(
                    `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${(page || currentPage) || 1}`
                );

                // Assuming the API response has a 'Search' property containing an array of movies
                const { totalResults = 0 } = response.data;
                if (response.data.Response === 'True') {
                    if (data1 === 5) {
                        setMovies(response.data.Search ? response.data.Search.slice(0, 5) : []);
                        setTotalPages(Math.ceil(totalResults / data1));
                        setRefresh(movies);

                    } else {
                        setMovies(response.data.Search || []);
                        setTotalPages(Math.ceil(totalResults / data1));
                        setRefresh(movies);
                    }
                    // setMovies(response.data.Search ? response.data.Search.slice(0, 5) : []);
                    // setMovies(response.data.Search ? response.data.Search.slice(-5) : []);

                    setTotalPages(Math.ceil(totalResults / data1)); // Assuming 10 results per page
                    // setTotalPages(Math.ceil(totalResults / 5)); // Assuming 10 results per page
                } else {
                    setMovies([]);
                    setTotalPages(0);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [search, refresh, currentPage]);

    const handlePageChange = (newPage) => {
        window.history.pushState(null, null, `/movie/${search}/${newPage}`);
        setCurrentPage(newPage);
    };

    const handleChange = (e) => {
        setData1(e)
        setRefresh((prevRefresh) => !prevRefresh);
    }
    return (
        <div>
            <h1 className='text-center text-white'>{search}</h1>
            <Container>
                <DropdownButton className='m-3' title="Dropdown button">
                    <Dropdown.Item ><button onClick={() => handleChange(10)}>10</button> </Dropdown.Item>
                    <Dropdown.Item ><button onClick={() => handleChange(5)}>5</button></Dropdown.Item>
                </DropdownButton>
                <Row>
                    {
                        movies?.length > 0 ?
                            <Contain movie={movies} searchs={search} /> : <NoContain />
                    }
                </Row>
                <button onClick={() => handlePageChange(currentPage === 2)}>first Page</button>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous Page</button>
                <span className='text-white p-2'>{`Page ${(page || currentPage) || 1} of ${totalPages}`}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next Page</button>
                <button onClick={() => handlePageChange(totalPages)}>last page</button>
            </Container>
        </div >
    )
}

export default Movies