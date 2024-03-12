
import Navbar from './Navbar';
import Footer from './Footer';
function Login() {
    const getDate = new Date();
    return (
        <>
            <Navbar />
            <main class="form-signin w-100 m-auto">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <form>
                                <img class="mb-4" src="https://cengage.my.site.com/resource/1607465003000/loginIcon" alt="" width="100" height="100" />
                                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p class="mt-5 mb-3 text-muted">&copy; {getDate.getFullYear()}</p>
                            </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login