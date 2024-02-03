import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Contain(props) {
    return (
        <>

            {props.movie.map((e, i) => {
                return (
                    <Col md={6} key={i} >
                        <div className='d-flex contain-box  mt-3'>
                            <div className='d-flex justify-content-center'>
                                <div> <img src={e.Poster} alt="" className='movie-img m-2' /></div>
                            </div>

                            <div className='contain-box-conatin w-100'>
                                <div>
                                    <h1 className='text-center'>{e.Title}</h1>
                                    <p className='text-center' >{e.Year}</p>
                                    <p className='text-center'>{e.Type}</p>
                                    <div className='d-flex justify-content-center'>
                                        <button className='contain-box-button '><Link to={`/${props.movie}/${e.Title}`} className='contain-box-button-link'>More</Link></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Col>
                )
            })
            }
        </>
    )
}

export default Contain
