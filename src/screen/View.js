import React, { useState } from 'react'
import Navbar from '../components/viewComponents/Header'
import Section from '../components/viewComponents/section'
import { Helmet } from "react-helmet";

export default function View() {
    const [check, setCheck] = useState(true);

    const hanldeDelete = (temp) => {
        setCheck(temp);
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New order | 1TAP SMM Panel - Social Services</title>
                <meta name="description" content="1TAP SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <Navbar onDelete={hanldeDelete} />
            <Section check={check} />
        </>
    )
}
