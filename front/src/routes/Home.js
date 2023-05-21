import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <div>
            <h1>Home</h1>

            <ul>
                <li>
                    <Link to={`/buttons-memo`}>Lecture #1: Buttons Memo & PropTypes</Link>
                </li>
                <li>
                    <Link to={`/sample-api-call`}>Lecture #2: useState & useEffect</Link>
                </li>
                <li>
                    <Link to={`/deps`}>Lecture #3: Deps</Link>
                </li>
                <li>
                    <Link to={`/cleanup`}>Lecture #4: Cleanup</Link>
                </li>
                <li>
                    <Link to={`/unit-converter`}>Project #1: Unit Convert</Link>
                </li>
                <li>
                    <Link to={`/todo`}>Project #2: Simple ToDo</Link>
                </li>
                <li>
                    <Link to={`/coin-trakcer`}>Project #3: Coin Tracker</Link>
                </li>
                <li>
                    <Link to={`/movie-list`}>Project #4: React Movie</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Home;