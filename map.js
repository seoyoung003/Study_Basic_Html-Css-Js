const array = [1, 2, 3, 4];
const result = [];
for (let i = 0; i < 4; i++) {    //일반적인 코드
    result.push(array[i] * 2);
}

array.map((element, i) => {
    return element * 2;  //result는 선언하지 않았지만 새로운 배열을 만들어서 return 한 값을 넣어줌, 위의 코드와 결괏값은 같음. 기존 배열은 안바뀜.
})