import { Seq } from "immutable";

export default function printBestStudents(inputObject) {
    const newObject = Seq(inputObject.filter((item) => item))
    console.log(newObject)
}
const grades = {
    1: {
      score: 99,
      firstName: 'guillaume',
      lastName: 'salva',
    }
  };
printBestStudents(grades)