import PropTypes from 'prop-types'
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

const MemoHook = props => {
  
    const  {state:counter, increment } = useCounter(500);
  
    const [show, setshow] = useState(true);

    const memoProcess = useMemo(() => heavyProcess(counter), [counter])


    return (
    <div>
        <h1>MemoHook</h1>
        <hr />
        <h1>Counter: { counter }  </h1>
        <br />
        <p>{ memoProcess }</p>
        <button
            className='btn btn-success'
             onClick={ increment } type="">+1</button>
        <button 
        className='btn btn-primary mx-3'
            onClick={ () => setshow(!show) } 
            >
                Show / Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}

MemoHook.propTypes = {}

export default MemoHook