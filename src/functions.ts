import { SayHelloProps } from "./interfaces";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log("Hello!");
  console.log(`Your first name is ${firstName}`);

  if (lastName) console.log(`Yout last name is ${lastName}`);

  if (age) console.log(`Your age is ${age}`);
}
