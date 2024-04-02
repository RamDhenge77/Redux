import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './action/Index';

function App() {

  const realState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  
  return (
    <div className='container mt-5 d-flex w-full justify-content-center'>
      <div>
        <h1>Hello Redux</h1>
        <div className='mt-5'>
          <button className='btn btn-secondary' onClick={()=> dispatch(decNumber())}>-</button>
          <span><button className='btn btn-light w-50'>{realState}</button></span>
          <span><button className='btn btn-secondary' onClick={()=> dispatch(incNumber(5))}>+</button></span>
        </div>
      </div>
    </div>
  );
}

export default App;
