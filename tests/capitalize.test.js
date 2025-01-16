import capitalize from '../src/capitalize.js';
import {strict as assert} from 'node:assert';

assert ( capitalize ('hello') === 'Hello') 
assert ( capitalize ('') === '') 

console.log ('Все тесты пройдены!');