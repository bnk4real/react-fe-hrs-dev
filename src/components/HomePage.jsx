import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
                <div class="container my-5">
                    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 class="display-4 fw-bold lh-1">Human Resources Management System</h1>
                            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Get Started!</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg px-4">About us</button>
                            </div>
                        </div>
                        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img class="rounded-lg-3" src="../src/assets/homepage.png" alt="" width="720" />
                        </div>
                    </div>
                </div>
            <Cards />
            <Footer />
        </div>
    );
}

export default HomePage;
