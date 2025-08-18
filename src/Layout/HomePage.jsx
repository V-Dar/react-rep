import React from "react";
import HeaderItem from "./HomePage/components/HeaderItem";
import ContentItem from "./HomePage/components/ContentItem";
import FooterItem from "./HomePage/components/FooterItem";

const HomePage = () => {
    return (
        <div className='container col-10'>
            <HeaderItem></HeaderItem>
            <ContentItem></ContentItem>
            <FooterItem></FooterItem>
        </div>
    );
}

export default HomePage;