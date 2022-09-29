import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
  </>
  ,
  document.querySelector('#root')
);
