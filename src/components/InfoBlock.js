import React, { useEffect, useRef, useState } from 'react';

export default function InfoBlock({title, htmlContent, pictureUrl, reversed = false}) {
  
  const blockRef = useRef();
  const [blockVisible, setBlockVisible] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
    
      return () => window.removeEventListener('scroll', scrollHandler);
      
  }, []);

  const scrollHandler = () => {
      if(blockRef.current && window.pageYOffset + window.innerHeight >= blockRef.current.offsetTop) {
        window.removeEventListener('scroll', scrollHandler);
        setBlockVisible(true);
      }
      
  }

  return (
    <section ref = {blockRef} className="section-info-block">
      <div className={`section-content info-block-container ${!blockVisible ? "-not-visible" : ""}${reversed ? " -reversed" : ""}`}>
        <div className="info-block__picture-container">
          <img className="info-block__picture" src={pictureUrl}></img>
        </div>
        <div className="info-block__content-container">
          <div className="info-block__content">
            <h2 className="info-block__content-title">{title}</h2>
            <div className="info-block__content-html">
              {htmlContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
