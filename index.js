// 直接读取从 YML 传过来的参数
const name = process.env.NAME;
const age = process.env.AGE;

console.log("从 YML 收到的参数：");
console.log("名字：", name);
console.log("年龄：", age);
