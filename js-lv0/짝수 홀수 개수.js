// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을
// return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let cnt = 0;
  let even = 0; //짝수
  let odd = 0; //홀수

  while (cnt < num_list.length) {
    if (num_list[cnt] % 2 === 0) {
      //짝수
      even++;
    } else {
      //홀수
      odd++;
    }
    cnt++;
  }
  return [even, odd];
}
