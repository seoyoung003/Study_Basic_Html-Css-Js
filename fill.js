Array(9).fill()//9개 길이의 array 만듬 fill의 () 안에 넣은 값을 9개 길이의 배열 값에 모두 넣어줌.

Array(9).fill(0).map((element, index) => {//0이 9개 들어있는 배열의 값을 1부터 9의 값이 들어있는 배열로 어떻게 바꾸는가
 return index + 1;
})