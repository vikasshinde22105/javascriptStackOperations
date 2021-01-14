import { arrayStack } from './arraystack.js';
import { TinyTest } from './tinytest.js';

const it = (desc, fn) => {
    try {
      fn();
      console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
    } catch (error) {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
      console.error(error);
    }
  };
  
  it('13 7 20 DUP - + should return the 7 numbers', () => {
    TinyTest.assertEquals(arrayStack('13 7 20 DUP - +'), 7);
});
it('12 + should return the -1', () => {
    TinyTest.assertEquals(arrayStack('12 +'), -1);
});
it('12 POP DUP shouuld return -1', () => {
    TinyTest.assertEquals(arrayStack('12 POP DUP'), -1);
});
it('13 20 7 12 - + should return the 25 numbers', () => {
    TinyTest.assertEquals(arrayStack('13 20 7 12 - +'), 25);
});
it('13 7 20 DUP should return the 20 numbers', () => {
    TinyTest.assertEquals(arrayStack('13 7 20 DUP'), 20);
});
it('13 20 12 7 - + should return the -1 numbers', () => {
    TinyTest.assertEquals(arrayStack('13 20 12 7 - +'), -1);
});
