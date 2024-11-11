import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgressBarLabel() {
    const [progressNum, setProgressNum] = useState(0);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        const input = e.target.value;
        //console.log(input);
        setInputValue(input);
    }

    function handleSubmitProgress (e) {
        setInputValue(0);
        const numValue = parseInt(inputValue, 10);
        console.log(numValue);
        if(!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
            setProgressNum(numValue);
        } else {
            alert('Please enter a number between 0 and 100');
        }
    }

    return (
        <div style={{width:'80%', margin: '0 auto'}}>
            <ProgressBar now={progressNum} label={`${progressNum}%`} className='mt-3' />
            <Form.Control className='mt-3' type="number" placeholder="Please input number!" value={inputValue} onChange={handleChange} />
            <Button className='mt-3' onClick={handleSubmitProgress}>Submit</Button>
        </div>
    );
}

export default ProgressBarLabel;