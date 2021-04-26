import React from 'react'
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

export default function PriceColumn({price, priceTier, priceTierTitle, markdownText}) {
  const { t, i18n } = useTranslation();
  return (
    <div className="price-column-container">
      <div className={`price-column__tier -${priceTier}`}>
        {price}
      </div>
      <h1 className="price-column__title">{priceTierTitle}</h1>
      <ReactMarkdown className="price-column__text">
        {markdownText}
      </ReactMarkdown>
    </div>
  )
}
