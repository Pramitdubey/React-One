import './App.css';
import ClassClick from './Components/ClassClick';
import ConditionalRendering from './Components/ConditionalRendering';
import FunctionalClick from './Components/FunctionalClick';
import Greet from './Components/Greet';
import List from './Components/List';
import ParentComp from './Components/ParentComp';
import PropsClass from './Components/PropsClass';
import State from './Components/State';

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
    </div>
  );
}

export default App;
