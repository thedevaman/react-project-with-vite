import {useState} from 'react'
const App = ()=>{

  const [count,setcount]=useState(0)


return(
  <div>
  <h1>vite</h1>
  <button onClick={()=>setcount(count+1)}>
    count -{count}
  </button>
  </div>
)
}
export default App