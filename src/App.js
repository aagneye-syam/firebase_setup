
import './App.css';
import { Firebase } from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
      Firebase.firestore().collection('products').get().then(snapshot=>{
        snapshot.forEach((obj)=>{

          console.log(obj.data())
        })
      })
      }}>Click Me</button>

    </div>
  );
}

export default App;
