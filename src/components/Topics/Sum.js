import React, {useState} from 'react'


const Sum = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, setSum] = useState(null)


    


    return <div className='puzzleBox sumPB'>
        <h4>Sumtin</h4>
        <input className='inputLine' type='number' onChange={e => setNum1(+e.target.value)}></input>
        <input className='inputLine' type='number' onChange={e => setNum2(+e.target.value)}></input>
        <button className='confirmationButton' onClick={() => setSum(num1 + num2)}>Calculate</button>
        <span className='resultsBox'>{sum}</span>
    </div>
}

export default Sum;