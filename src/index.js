import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import  {Provider}  from 'react-redux'
import store from './redux/store'

const root =  ReactDOM.createRoot(document.getElementById('root'));

//provider is wrapped around app to provide the store "state" to app component
//which is why we pass {store} as a prop, making react app aeware of our store
root.render(<Provider store= {store}> 
    <App/>
</Provider>);