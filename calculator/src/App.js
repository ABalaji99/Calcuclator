import './Styles.css'
import './App.css';


const ACTIONS ={
  ADD_DIGIT :'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT:'delete-digit',
  EVALUTE:'evalute'
}

function reducer(state , {type , payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return (
        ...state,
         currentOperand: `${currentOperand || "" } ${payload.digit}`,
      )
  }
}

function App() {
  const [{currentOperand , previousOperand ,operation} , dispatch] =useReducer( reducer ,{})
  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>

      <button type="button" className='span-two'>AC</button>
      <button type="button">DEL</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">*</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">+</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">-</button>
      <button type="button">.</button>
      <button type="button">0</button>
      <button type="button">=</button>
    </div>
  );
}

export default App;
