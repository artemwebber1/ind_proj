import img from '../../img/school1.png'
import s from '../../styles/home.module.css'

const Home = () => {
    return (
        <div className={s.homeWrapper}>
            <center>
                <img src={img} alt="Фото школы" className={s.schoolPhoto} />
            </center>
            <p className={s.text}>Приветствуем посетителей официального сайта!</p>
            <div className={s.usefulLinks}>
                
            </div>
        </div>
    )
}

export default Home;