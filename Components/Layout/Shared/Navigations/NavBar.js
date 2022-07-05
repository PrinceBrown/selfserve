

import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white navbg-1 shadow">
            <div className="container">


                <Link href="/">
                    <a className="navbar-brand" >
                        <img width="100px"
                            src="data:image/png;base64,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"
                            alt="" />
                    </a>
                </Link>


                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#enercareNavigationMenu" aria-controls="enercareNavigationMenu" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse navbar-collapse" id="enercareNavigationMenu">


                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                        <li className="nav-item me-3">
                            <Link href="/account/user">
                                <a className="nav-link text-dark">Account</a>
                            </Link>
                        </li>


                        <li className="nav-item me-3">
                            <Link href="/support">
                                <a className="nav-link text-dark">Support</a>
                            </Link>
                        </li>

                    </ul>

                </div>




            </div>
        </nav>
    )
}

export default NavBar