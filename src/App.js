import { useState } from 'react';
import Title from "./Components/Title";
import Button from "./Components/Button";
function App() {
    const [isOpened, setOpen] = useState(false);
    const toggleComponent = ()=>{
        setOpen((prevState)=>!prevState)
    }
    return (
   <div className="container">
       <Button handleClick={toggleComponent} btnTitle={isOpened ? "Close title":"Open title"}/>
       {isOpened && <Title name="Products" type="bold"/>}
   </div>
  )
}
export default App;
