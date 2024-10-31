import './App.css'
import Card from './components/Card.jsx'
import Footer from './components/footer.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <div>
          <Card title="1" content="1"/>
          <Card title="3" content="3"/>
          <Card title="5" content="5"/>
          <Card title="7" content="7"/>
          </div>
       
        <div>
          <Card title="2" content="2"/>
          <Card title="4" content="4"/>
          <Card title="6" content="6"/>
          <Card title="8" content="8"/>
          </div>
       
        
      </div>
      <Footer/>
    </>
  )
}

export default App
