import React, { useState } from 'react'
import Header from "../components/viewComponents/Header"
import Section from '../components/viewComponents/section'
import { Helmet } from "react-helmet";

export default function Order() {
  const [check, setCheck] = useState(true);

  const hanldeDelete = (temp) => {
    setCheck(temp);
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order | 1TAP SMM Panel - Social Services</title>
        <meta name="description" content="1TAP SMM Panel - Social Services. Generating leads with social media marketing" />
      </Helmet>
      <Header onDelete={hanldeDelete} />
      <Section check={check} />
    </>
  )
}
