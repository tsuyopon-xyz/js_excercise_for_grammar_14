// 課題1: 人間を表すPersonクラスを作成する
// - クラス名はPersonとする
// - Personクラスのインスタンスは次の情報を持つようにする
//   - name: 名前
//   - age: 年齢
//   - gender: 性別
//   - height: 身長
//   - weight: 体重
// - インスタンスごとの固有の情報はコンストラクタ経由でセットする
class Person{
    constructor(name, age, gender, height, weight){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
}

// 課題2: 自分もしくは、架空の人の情報を使って１人の人間を表すPersonインスタンスを生成する
// - インスタンスは変数 `me` に代入する
const me = new Person("ああああ", 29, "male", 180, 55.5);

// 課題3: 課題2で生成したインスタンスの情報をconsole.logを使って、「名前」「年齢」「性別」「身長」「体重」が正しくセットされていることを確認する
console.log(me.name);
console.log(me.age);
console.log(me.gender);
console.log(me.height);
console.log(me.weight);