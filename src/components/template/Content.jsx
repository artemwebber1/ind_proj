import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import MainInfo from '../pages/info/MainInfo'
import News from '../pages/News'
import s from '../../styles/template/content.module.css'

const Content = () => {
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<MainInfo />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>
    )
}

export default Content;