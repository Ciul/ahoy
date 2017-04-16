import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </div>

export default Home