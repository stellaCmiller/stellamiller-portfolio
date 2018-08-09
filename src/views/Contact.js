import React from 'react';

class Contact extends React.Component {
    render(){
        return <div className="row full-col justify-content-center align-items-center">
            <div className="offset-lg-3 col-md-9" align="center">
                <section>
                    <h2>Contact Me</h2>
                    <hr/>
                    <form action="https://formspree.io/stella.miller@utexas.edu" method="POST">
                        <label>Name:</label>
                        <input type="text" className="form-control" name="name" placeholder="Your Name" required/>
                        <br/>
                        <label>Email Address:</label>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required/>
                        <br/>
                        <label>Message: </label>
                        <textarea type="text" className="form-control" name="message" rows="6" required></textarea>
                        <br/>
                        <div className="sub-box">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    }
}

export default Contact;

