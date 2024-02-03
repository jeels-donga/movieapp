import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
    const [query, setQuery] = useState('');
    return (
        <div>
            <Row className='header '>
                <Col><h1 className='text-center mt-1'><Link to={`/`} className=' header-button-link'>LOGO</Link></h1></Col>
                <Col>
                    <div className='d-flex justify-content-center'>
                        <div className='m-3 menu'><Link to={`/movie/movie`} className='header-button-link'>Movie</Link></div>
                        <div div className='m-3 menu'><Link to={`/movie/series`} className='header-button-link'>series</Link></div>
                        <div div className='m-3 menu'><Link to={`/movie/anime`} className='header-button-link'>Anime</Link></div>

                    </div>

                </Col >
                <Col>
                    <div className='d-flex justify-content-center'>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for a movie"
                            className='m-3 header-input' />
                        <button className='header-button'> <Link to={`/movie/${query}`} className='header-button-link'>Search</Link></button>
                    </div>

                </Col>
            </Row >


        </div >
    )
}

export default Header
