import React from 'react'

function Footer() {
  return (
    <div className='container-fluid bg-dark'>
        <div className="container mt-5">
            <footer className="pt-5">
                <div className="row">
                    <div className="col-6 col-sm-2">
                        <h5 className='text-white'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-2">
                        <h5 className='text-white'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-2">
                        <h5 className='text-white'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-4 offset-sm-1">
                        <form>
                        <h5 className='text-white'>Subscribe to our newsletter</h5>
                        <p className='text-white'>Monthly digest of whats new and exciting from us.</p>
                        <div className="d-flex w-100 gap-2">
                            <label for="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                            <button className="btn btn-theme" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                    <p className='text-white'>© 2021 Company, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer