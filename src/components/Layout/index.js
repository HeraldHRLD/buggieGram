import React from 'react';
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles';

export const Layout = ({ children, title, subtitle, TitleUp }) => {
  return (
    <>
      <Helmet>
        {TitleUp && <title> {TitleUp} | Buggiegram🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}