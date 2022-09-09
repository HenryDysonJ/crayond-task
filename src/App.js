import "./App.css";
import Card from "./Components/CardComponent/Card";
import Form from "./Components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditForm from "./Components/EditForm/EditForm";

function App() {
  return (
    <div className="App col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/form" element={<Form/>}/>
          <Route path="/edit" element={<EditForm/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
