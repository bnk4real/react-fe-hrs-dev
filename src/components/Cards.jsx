import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className="container">
            <h1 className="text-center mt-5 mb-5">Provided Modules: </h1>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div class="card">
                        <div className="card-header">Service Management System.</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div className="card-header">API Developement for retailer.</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div className="card-header">Python Web Developement</div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Cards;
