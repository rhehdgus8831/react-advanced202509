import React, {useCallback, useState} from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import {log} from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

const isPrime = (number) => {
    log('Calculating if is prime number', 2, 'other');
    if (number <= 1) {
        return false;
    }

    const limit = Math.sqrt(number);

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

const Counter = ({initialCount}) => {
    log('<Counter /> rendered', 1);
    const initialCountIsPrime = isPrime(initialCount);

    // 카운티의 변화를 배열로 추적
    const [counterChanges, setCounterChanges] = useState([initialCount]);

    // const [counter, setCounter] = useState(initialCount);

    const decrementHandler = useCallback(() => {
       setCounterChanges(prev => [-1, ...prev])
    }, []);

    const incrementHandler = useCallback(() => {
        setCounterChanges(prev => [1, ...prev])
    }, []);

    // 현재 카운트 로그배열의 총합
    const totalCount = counterChanges.reduce((acc, curr) => acc + curr, 0);

    return (
        <section className="counter">
            <p className="counter-info">
                The initial counter value was <strong>{initialCount}</strong>. It{' '}
                <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
            </p>
            <p>
                <IconButton
                    icon={MinusIcon}
                    onClick={decrementHandler}>
                    Decrement
                </IconButton>
                <CounterOutput value={totalCount}/>
                <IconButton
                    icon={PlusIcon}
                    onClick={incrementHandler}>
                    Increment
                </IconButton>
            </p>

            <CounterHistory history={counterChanges}/>
        </section>
    );
};
//export default React.memo(Counter);
export default Counter;
