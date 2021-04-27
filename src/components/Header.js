import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { MenuOutline, CloseOutline } from 'react-ionicons'

function Header ({whiteStyle = false, transparent = true}) {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerTransparentStyle, setHeadertransparentStyle] = useState(transparent);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setHeadertransparentStyle(false);
        } else {
            setHeadertransparentStyle(transparent);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <section className={`section-header${menuOpen ? " -menu-open" : ""}${whiteStyle && !headerTransparentStyle ? " -white" : ""}${!whiteStyle && !headerTransparentStyle ? " -dark" : ""}`}>
                <div className={`section-content navbar${menuOpen ? " -menu-open" : ""}${whiteStyle && !headerTransparentStyle ? " -white" : ""}${!whiteStyle && !headerTransparentStyle ? " -dark" : ""}`}>
                    <div className="logo-container">
                        <Link to="/" className="navbar-logo">
                            <img className="navbar-logo-image" src="images/main_logo.png"/>
                        </Link>
                    </div>
                    <div className="menu-container">
                        <Link to="/clases" className="navbar-link">
                            {t("clases")}
                        </Link>
                        <Link to="/nosotros" className="navbar-link">
                            {t("nosotros")}
                        </Link>
                        <Link to="/contactanos" className="navbar-link">
                            {t("contactanos")}
                        </Link>
                        {/* <Link to="/inscripcion" className="regular-button -short">
                            {t("inscripcion")}
                        </Link> */}
                    </div>
                    {!menuOpen ?
                        <div className="mobile-menu-container" onClick={toggleMenu}>
                            <MenuOutline
                                color={whiteStyle && !headerTransparentStyle ? '#000000' : '#FFFFFF'} 
                                title={"menu"}
                                height="40px"
                                width="40px"/>
                        </div>
                    :
                        <div className="mobile-menu-container" onClick={toggleMenu}>
                            <CloseOutline
                                color={'#000000'} 
                                title={"close"}
                                height="40px"
                                width="40px"/>
                        </div>

                    }

                    <div className="nav-mobile-menu">
                        <ul className="nav-menu-list">
                            <li className="nav-menu-list-item">
                                <Link to="/clases" className="nav-links" onClick={closeMobileMenu}>
                                    {t("clases")}
                                </Link>
                            </li>
                            <li className="nav-menu-list-item">
                                <Link to="/nosotros" className="nav-links" onClick={closeMobileMenu}>
                                    {t("nosotros")}
                                </Link>
                            </li>
                            <li className="nav-menu-list-item">
                                <Link to="/contactanos" className="nav-links" onClick={closeMobileMenu}>
                                    {t("contactanos")}
                                </Link>
                            </li>
                            {/* <li className="nav-menu-list-item">
                                <Link to="/inscripcion" className="nav-links" onClick={closeMobileMenu}>
                                    {t("inscripcion")}
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Header;