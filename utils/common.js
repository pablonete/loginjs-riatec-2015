export function isEmpty(text) {
	return !text;
}

function checkNumber(value) {
  if(!isFinite(value)) {
    throw new Error(`${value} is not a number`);
  }
}

export function sum(a, b) {
  checkNumber(a);
  checkNumber(b);
  
  return a + b;
}

export function write(text, writer) {
  writer.log(text);
}