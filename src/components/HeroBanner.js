import React from 'react'
import {Link} from 'react-router-dom';

export default function HeroBanner({title, subtitle, buttonText, buttonUrl, verticalAlignment = "middle", horizontalAlignment="center", hasBigTitle = false, withBottomMargin = false, imageUrl, backgroundYPosition = "center", isShortHero = false, notTitleHero = false}) {
  return (
    <section className={`section-hero-banner${isShortHero ? " -short-hero" : ""}${hasBigTitle ? " -big-title" : ""}${notTitleHero ? "-not-title-hero" : ""}`}>
      <div className="section-hero-banner-background" style={{backgroundImage: `url(${imageUrl})`, backgroundPositionY: `${backgroundYPosition}`}}></div>
      <div className={`section-content section-hero-banner-content${ ` -${verticalAlignment}`}${ ` -${horizontalAlignment}`}`}>
        <h1 className="hero-banner-title">
          {title}
        </h1>
        { subtitle && subtitle.length > 0 &&
          <h3 className="hero-banner-subtitle">
            {subtitle}
          </h3>
        }
        { buttonUrl && buttonUrl.length > 0 &&
          <div className="hero-banner-button">
            <Link to={buttonUrl} className="regular-button">
              {buttonText}
            </Link>
          </div>
        }
      </div>
    </section>
  )
}
