import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ServerError = () => {
    return (
        <React.Fragment>
            <div className='account-pages my-5'>
                <Container className='justify-content-center'>
                    <Row md={8} lg={6} xl={4}>
                        <Col>
                            <Card>
                                <Card.Body className='p-4'>
                                    <div className='text-center w-75 m-auto'>
                                        <div className='auth-logo'>
                                            <Link to='/' className='logo logo-dark text-center'>
                                                <span className='logo-lg'>
                                                    <img alt='' height='22'></img>
                                                </span>
                                            </Link>

                                            <Link to='/' className='logo logo-dark text-center'>
                                                <span className='logo-lg'>
                                                    <img alt='' height='22'></img>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <h1 className='text-error'>500</h1>
                                        <h3 className='mt-3 mb-2'>Internal server error</h3>
                                        <p className='text-muted mb-3'>
                                            Why not try refreshing your page? or you can contact{' '}
                                            <Link to='#' className='text-dark'>
                                                <b>Support</b>
                                            </Link>
                                        </p>
                                        <Link to='/' className='btn btn-success waves-effect waves-light'>
                                            Back to home
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className='footer footer-alt'></footer>
        </React.Fragment>

    )
}

export default ServerError;
