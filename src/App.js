
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

      <button onClick={()=>{
      Firebase.firestore().collection('products').add({
        name : 'MI',  
        price : 12000
      })
      }}>Click to add</button>

    <button onClick={()=>{
      Firebase.firestore().collection('products').doc('V25rpF0bVrkQ1U33DCL1').delete().then(()=>{
        console.log('Deleted')
      })
    }}>Delete</button>
    </div>
  );
}

export default App;
