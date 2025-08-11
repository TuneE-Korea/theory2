// Spread[...] 문법
// 1. 문자열에 spread 사용하기
const first = [..."ice"]; // [i, c, e]

// 2. 오브젝트에 spread 사용하기 -> ... 은 껍데기를 벗겨주는 것과 같다.
const obj = { a: 1, b: 2, c: 3 };
const test = { d: 4, e: 5, f: 6, ...obj, a: 100 };

const person = { name: "kim", age: 23 };
const newPerson = { ...person, department: "nothing", name: "jeong" };

const a = { x: 1 };
const b = { y: 2 };
const point = { ...a, ...b }; // { x: 1, y: 2}

const name = "김태윤";
const age = 23;

// obj 에서는 key - value 이름 같으면 하나로 생략가능
const absent = { name, age }; // const absent = { name: name, age: age }; 에서 생략

// 3. 배열에서 스프레드
const arr1 = [2, 4, 6];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
