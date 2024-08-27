

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <header>
<MyNav />
</header>
<main> 
<Welcome />
<Container fluid >
 <BookList books={fantasy} />
</Container>
</main>
<footer>
<MyFooter />
</footer>
    </>


  )
}

export default App
