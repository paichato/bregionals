import React from 'react';
import intersect from '../../Assets/Intersect1.png';
import lp from '../../Assets/Intersect2.png';
import { Lp, LpHero } from './LandingPageElements';
import {FiArrowRight} from 'react-icons/fi';

function LandingPage() {
    return (
        <>
            <Lp>
                <img src={intersect} className="intersect" alt="inb"/>
                <img src={lp} alt="phone" className="lp" />
                <LpHero>
                <h1>BeeRegionals</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. </p>
                <div>
                    <button>Login
                        <FiArrowRight className="icon"/>
                    </button>
                </div>
                <span>made by paichato</span>
            </LpHero>
            </Lp>
            
        </>
    )
}

export default LandingPage
