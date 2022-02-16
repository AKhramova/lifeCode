import { Singletone } from './Singletone';

const instance = Singletone.getInstance();
const instance1 = Singletone.getInstance();
const instance2 = Singletone.getInstance();
const instance3 = Singletone.getInstance();
const instance4 = Singletone.getInstance();
const instance5 = Singletone.getInstance();
const instance6 = Singletone.getInstance();
const instance7 = Singletone.getInstance();
const instance8 = Singletone.getInstance();

console.log({instance, instance1, instance2, instance3, instance4, instance5});