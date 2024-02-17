function solution(numbers) {
  const answer = [];

  for (let num = 0; num < numbers.length; num += 1) {
    answer.push(numbers[num] * 2);
  }
  return answer;
}
