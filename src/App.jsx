import {useState} from 'react'
import {useRef} from 'react'
const App = ()=>{

  const title = useRef(null)
  const [color,setColor]=useState('black')
 const test = ()=>{
  setColor(color=='black'?'red':'black')
 }
 const reftest = ()=>{
  title.current.style.color= "blue"
  title.current.style.fontWeight= "bold"
 }

return(
  <div>
  <h1 ref={title} style={{color:color}}>useRef Effect</h1>
  <button onClick={test}>Test useState</button>
  <button onClick={reftest}>Test useRef</button>
  <div style={{height:'100vh',background:'red',  display:'flex',
      alignItems:'center',
      justifyItems:'center'}}>
    <div style={
      {width:350,
      height:280,
      background:'blue',
    
      }}>
      
    </div>
  </div>
  </div>
)
}
export default App