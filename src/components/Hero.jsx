import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://eddy.com/wp-content/uploads/2021/02/why-is-human-resources-important@2x-100-1200x675.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Enhance HRS right now!</h1>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse rerum ad quaerat quasi voluptatibus nam, animi earum a reprehenderit.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Get Started!</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Learn more.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
