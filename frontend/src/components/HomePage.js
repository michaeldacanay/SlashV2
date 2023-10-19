import React from 'react';
import logo from '../slash.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const submit = () => {
        navigate("/search");
    }
    return (
        <div className="hpage">
            <div className="container text-center pt-5">
                <div>
                    <img className="logo" src={logo} alt="Slash Logo" />
                </div>
                <div className="mt-4">
                    <div className="intro-text">
                        <p>
                            Do you love shopping? Are you in search of some good deals while shopping online?! Slash is here to help you look for the best deals!
                        </p>
                        <p>
                            Slash is a publicly accessible web API framework that allows one to scrape the most popular e-commerce websites to get the best deals on the searched items across multiple e-commerce websites. Currently supported websites include Amazon, Walmart, BestBuy, Costco, and eBay.
                        </p>
                        <p>
                            Fast: With Slash, you can save over 50% of your time by comparing deals across websites within seconds
                        </p>
                        <p>
                            Easy: Slash introduces easy-to-use public APIs to filter, sort, and search through the search results
                        </p>
                        <p>
                            Powerful: Produces JSON responses that can be easily customized to bring about the desired output
                        </p>
                    </div>
                    <Button variant='primary' onClick={submit}>Start</Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
