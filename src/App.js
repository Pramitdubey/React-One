import './App.css';
import AppStyle from './Components/AppStyle';
import ClassClick from './Components/ClassClick';
import ConditionalRendering from './Components/ConditionalRendering';
import Form from './Components/Form';
import FunctionalClick from './Components/FunctionalClick';
import Greet from './Components/Greet';
import Inline from './Components/Inline';
import List from './Components/List';
import ParentComp from './Components/ParentComp';
import PropsClass from './Components/PropsClass';
import State from './Components/State';
import Stylesheet from './Components/Stylesheet';

function App() {
  return (
    <div className="App">

      <Greet name="Ajay" city="Delhi">
        <h1>child of Greet</h1>
      </Greet>

      <PropsClass name="Pramit" cl="10"/>

      <State/>

      <FunctionalClick/>

      <ClassClick/>

      <ConditionalRendering/>

      <List/>

      <ParentComp/>

      <Stylesheet primary={true}/>

      <Inline/>

      <AppStyle/>

      <Form/>
    </div>
  );
}

export default App;
