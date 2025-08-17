import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const date = new Date();
const numbers = [1, 2, 3, 4, 5, 6];
const listItems = numbers.map((number) =>
  <li key={number}>Элемент {number}</li>);

createRoot(document.getElementById('root')).render(
  <div className='container col-10'>
    <h1 className='h1-style m-3'>Какие-то карточки с картинками</h1>

    {Array.from({ length: 5 }, (value, index) =>
      <div className="card m-3">
        <img src={`https://picsum.photos/${200 + index}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
        <footer>
          <p className='m-3'>© Авторские права мои {date.getFullYear()}</p>
        </footer>
      </div>
    )}



  </div>
)
