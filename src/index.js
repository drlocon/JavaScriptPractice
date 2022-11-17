// const let等の変数宣言

// var val1 = "var変数";
// console.log(val1)

// var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var変数は際宣言可能
// var val1 = "var変数を際宣言";

// let val2 = "let変数";
// console.log(val2);

// letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは際宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更は可能
// const val4 = {
//   name: "トム",
//   age: 28,
// };
// val4.name = "Tom";
// val4.address = "Osaka";
// console.log(val4);

// constで定義した配列はプロパティの変更は可能
// const val5 = ['Dog', 'cat'];
// val5[0] = "Bird";
// val5.push("monkey");
// console.log(val5);

///////////////////////////////////////////////////

// テンプレート文字列

// const name = "トム";
// const age = 28;
// 私の名前はトムです。年齢は28歳です

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

///////////////////////////////////////////////////

// アロー関数

// 従来の関数 例1
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// 従来の関数 例2
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// この書き方でもOK ※1行しかなくてreturnを省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,20));

///////////////////////////////////////////////////

// 分割代入
// const myProfile = {
//   name: "トム",
//   age: 28,
// };
// const message1 = `名前は"${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は"${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ['トム', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

///////////////////////////////////////////////////

// デフォルト値について
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello();
// sayHello("トム");

///////////////////////////////////////////////////

// スプレッド構文 ...のこと

// 配列の展開 (配列の中身を順番に出力してくれる)
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// スプレッド構文で書くとこうなる
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// arr4のコピーをarr6に代入
// const arr6 = [...arr4];
// console.log(arr6);
// arr4とarr5をarr7に代入
// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // [10, 20, 30, 40]の出力結果

///////////////////////////////////////////////////

// mapやfilterを使った配列の処理

// const nameArr = ["田中", "山田", "トム"];

// 従来の方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// mapを使うとkこうなる(配列の中身を順番に出力する)
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// もっとシンプルに書くとこうなる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter(条件に合うものだけ配列にして出力する)
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "トム") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

///////////////////////////////////////////////////

// 三項演算子
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.tolocaleString() : '数理を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

///////////////////////////////////////////////////

// 論理演算子の本当の意味

// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります")
// }
// if (flag && flag2) {
//   console.log("1も2もtrueになります")
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
