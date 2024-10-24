import { useState } from "react";

export const News = () => {
    const [news, setNews] = useState([]);

    // Здесь запрос к базе данных для получения новостей

    return (
        <div>
            {news.length === 0 ? <p>Пока нет новостей</p> : news.map(n => {
                return <NewsItem title={n.title} text={n.text} />
            })}
        </div>
    )
}

export default News;

const NewsItem = ({title, text}) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    )
}