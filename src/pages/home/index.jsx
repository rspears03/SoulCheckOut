import React from 'react';
import Layout from "../../components/layout"
import './styles.css'
import { Link } from "react-router-dom"
// import "../src/assets/img/header-bg.jpg"
// import "../../../src/assets/img/header-bg.jpg"
// import "map-image.png"

function HomePage() {
    return (
        <Layout>


        <header className="masthead">
            
            <div className="container">
            <div className="masthead-subheading" id="homeHeader"><h1>Welcome To Soul Chicken!</h1></div>
            <div > <Link className='orderNow' to="/products">Order Now</Link></div>  
            {/* <img src="https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe.jpg" alt="" width="1000px" height="600px" id='serviceImg'></img> */}
            </div>
        </header>
         
        <section className="page-section" id="service">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" id='services'>Services</h2>
                    <h3 className="section-subheading text-p">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Great Chicken</h4>
                        <p className="text-p serviceChicken">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Great Service</h4>
                        <p className="text-p serviceChicken">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3"> Secure Payment with Stripe￼ </h4>
                        <p className="text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
               

        <section className="page-section-1" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" id="about">About</h2>
                    <h3 className="section-subheading text-about">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2015-2018</h4>
                                <h4 className="subheading about-1">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2018</h4>
                                <h4 className="subheading about-1">Transition to Online Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2020</h4>
                                <h4 className="subheading about-1">Expansion Across the United States</h4>
                            </div>
                            <div className="timeline-body"><p className="text-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="page-section-2" >
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" id='contact'>Contact Us</h2>
                    <h3 className="section-subheading " id="text">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Soul Chicken 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
        </Layout>
    )
}

export default HomePage