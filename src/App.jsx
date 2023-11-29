
// import './App.css'

// const App = () =>{

//   let alumno = "Rodrigo"
//   return (
//     <div className="contenedor">
//       <h1>Hola {alumno}</h1>
//     </div>
//   )
// }

// export default App


// JSX: Es una mezcla de JS  + HTML. me permite hacer funciones que retornan HTML
//El html que retorna tiene todas las funcionalidades de JS




import './App.css'
import CardContainer from './components/CardContainer'
import Nav from './pages/Nav'

const App = () =>{

  return (
    <div>
      <Nav />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </div>
  )
}

export default App