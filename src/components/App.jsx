import { BrowserRouter } from 'react-router-dom';
import Header from './template/Header'
import Navbar from './template/Navbar'
import Content from './template/Content'

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

export default App;