function insertAtBeginningOfArray(array: any[], value: any){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray: number[] = [1,2,4];

// of type any, instead of an array of numbers since we used any[]. We lost type information and typscript support
const updateArray = insertAtBeginningOfArray(demoArray, -99);
// TS wont catch error
updateArray[0].split('')

// Above function using generics
function insertAtBeginningOfArrayGeneric<T>(array:T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray2: number[] = [3, 34, 754];
// TS know know the type and can provide support
const updateArray2 = insertAtBeginningOfArrayGeneric(demoArray2, 666);



