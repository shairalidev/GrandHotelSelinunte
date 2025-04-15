import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HeaderForFullChat() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* menu header */}
            <header>
                            <div className="main__logo">
                                <Link to="/home">
                                    <img
                                        className="logo__class myclass1"
                                        src="/assets/images/logo/logo__two.png"
                                        alt="moonlit"
                                    />
                                </Link>
                            </div>
                           


                              

            </header>

        </>
    )
}

export default HeaderForFullChat
