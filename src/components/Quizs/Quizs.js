import React from 'react';
import { useParams } from 'react-router-dom';

const Quizs = () => {
    const {quizId} = useParams()
    return (
        <div>
            <h3>quiz pages {quizId }</h3>
        </div>
    );
};

export default Quizs;