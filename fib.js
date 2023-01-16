function fibs(num) {
  let sequence = [0, 1];
  for (let i = 2; num > i; i++) {
    let a = sequence[i - 2];
    let b = sequence[i - 1];
    let newSequence = a + b;
    sequence.push(newSequence);
  }
  return sequence;
}

console.log(fibs(8));

function fibsRec(num, sequence = [0, 1]) {
  if (num === 2) {
    return sequence;
  } else {
    let a = sequence[sequence.length - 1];
    let b = sequence[sequence.length - 2];
    let newSequence = a + b;
    sequence.push(newSequence);
    return fibsRec(num - 1, sequence);
  }
}

console.log(fibsRec(8));
