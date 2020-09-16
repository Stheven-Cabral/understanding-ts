interface Bird {
  // 'type' here is a literal type where the 'type' property must be the string 'bird'
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}
// The type property in 'Bird' and 'Horse' interface is called a descriminated union.

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // The type guard in the if condition is used in order to ensure we could use the 'flyingSpeed' property which is inherited by animal from 'Bird' using union typing.
  // if ('flyingSpeed' in animal) {
  //   console.log('Moving with speed: ' + animal.flyingSpeed);
  // }

  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed =animal.runningSpeed;
  }
  console.log('');
}