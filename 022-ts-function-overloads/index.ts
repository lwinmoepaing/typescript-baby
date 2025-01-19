type ResponseType = {
  success: boolean;
  data: number;
};

const successResponse = (data: number): ResponseType => ({
  success: true,
  data,
});

function sum(x: number[]): number;
function sum(x: number[], standardResponse: true): ResponseType;
function sum(x: number, y: number): number;
function sum(x: number, y: number, standardResponse: true): ResponseType;
function sum(
  numberOrArray: number[] | number,
  numberOrStandardRes: number | true = 0,
  standardResponse?: true
) {
  // When First Parameter is Number Array
  const isArray = Array.isArray(numberOrArray);

  if (isArray) {
    const numberArray = numberOrArray;
    const standardResponse = numberOrStandardRes;
    const totalSum = numberArray.reduce((acc, next) => acc + next, 0);
    return standardResponse ? successResponse(totalSum) : totalSum;
  }

  // When First Parameter is number
  const x = numberOrArray;
  const y = numberOrStandardRes;
  if (typeof y === "boolean") {
    throw Error(
      "When First Parameter is Number, Second Parameter must be Number"
    );
  }

  const totalSum = x + y;
  return standardResponse ? successResponse(totalSum) : totalSum;
}

const totalA = sum(1, 2);
// result: 3

const totalB = sum([4, 6]);
// result: 10
