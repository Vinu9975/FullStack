
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")

    }
  }
  return (
    
    <BrowserRouter>
    <Navbar title="Text Edit App" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter The Text" mode={mode} showAlert={showAlert}/>}>
        </Route>
        <Route path="/about" element={<AboutUs mode={mode}/>}>
        </Route>
      </Routes>
    </div> 
    </BrowserRouter>
 
  );
}

export default App;
