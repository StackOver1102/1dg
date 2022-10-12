import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Lading from '../components/homeComponents/Lading'
import Section from '../components/homeComponents/Section'
import Achievements from '../components/homeComponents/Achievements'
import Pricing from '../components/homeComponents/Pricing'
import Footer from '../components/homeComponents/Footer'
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux'
function HomeScreen() {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(createWallet())
    // }, [dispatch])
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>1DG SMM Panel - Social Services</title>
                <meta name="description" content="1DG SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <Header />
            <Lading />
            <Section />
            <Achievements />
            <Pricing />
            <Footer />

        </>
    )
}

export default HomeScreen