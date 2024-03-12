import React from 'react';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">HRS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/hero">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Modules</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-warning" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
