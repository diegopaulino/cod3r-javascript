import React from 'react';
import ReactDOM from 'react-dom';

import Saudacao from './components/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Ana" />
    </div>,
    document.getElementById('root')
)