// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
//  num_list의 원소의 순서를 거꾸로 뒤집은 배열을
//  return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  const newArray = [];
  let cnt = num_list.length - 1; //5 4 3 2 1
  while (cnt >= 0) {
    //배열길이만큼 반복 해서
    newArray.push(num_list[cnt]);

    cnt = cnt - 1;
  }
  return newArray;
}
