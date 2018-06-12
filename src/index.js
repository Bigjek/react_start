import React from 'react';
import {render} from 'react-dom';
import Test from './test';
import Test2 from './test2';

render(
    <div>
        Hello world!
        <Test />
        <Test2 />
    </div>,
    document.getElementById('root')
)

//fix reload page
module.hot.accept()