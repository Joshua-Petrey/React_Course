let age:number = 35; 

let userName: string = 'Val';

const isAllowed: boolean = true;

//array
const animals: string[] = ['cat','dog'];
const ages: number[] = [23,45,67];

// object definition. [] denotes array of this object
let peeple: {
  name: string,
  age: number,
  employed: boolean
}[]

peeple = [{
  name: 'Joe',
  age: 31,
  employed: true
}, {
  name: 'Bill',
  age:56,
  employed: false
}]

// Union 
let course: string | number = 'React course'

// Type alias -store definitions for easier reuse
type Course = {
  id: string | number;
  cost: number;
};

