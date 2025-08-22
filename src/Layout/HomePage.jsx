import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderItem from "./HomePage/components/HeaderItem";
import ContentItem from "./HomePage/components/ContentItem";
import FooterItem from "./HomePage/components/FooterItem";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const value = "Какие-то карточки с картинками";
    const [labels, setLabels] = useState([
        // { id: 1, cardTitle: "Заголовок 1", cardText: "Описание 1" },
        // { id: 2, cardTitle: "Заголовок 2", cardText: "Описание 2" },
        // { id: 3, cardTitle: "Заголовок 3", cardText: "Описание 3" },
        // { id: 4, cardTitle: "Заголовок 4", cardText: "Описание 4" },
        // { id: 5, cardTitle: "Заголовок 5", cardText: "Описание 5" },
        // { id: 6, cardTitle: "Заголовок 6", cardText: "Описание 6" },
    ]);

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setLabels(res.data.slice(0, 5))
            });
    })

    return (
        <div className='container col-10'>
            <HeaderItem headerText={value}></HeaderItem>
            <ContentItem
                setOfLabels={labels}>
            </ContentItem>
            {/* <button className="btn btn-primary m-3"
            onClick={()=>{
                setLabels([...labels,
                    { id: 1, cardTitle: "Новый заголовок 1", cardText: "Новое описание 1" }
                ])
            }}>Добавить элемент</button> */}
            <FooterItem></FooterItem>
        </div>
    );
}

export default HomePage;