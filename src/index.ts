// 請介紹兩個字串方法跟數字方法

//字串1.substring的用法，將變數定義的字串值，透過參數搭配取出字串中的第幾個字元到字串第幾個位置的字元後回傳。(作業)
let dd: string = 'pippentu6708';
console.log(dd.substring(6, 8));   //tu 要回傳tu，結束的值需要+1)
console.log(dd.substring(6));      //tu6708，回傳第6個字串之後

//字串2. concat的用法，將變數定義的字串值，透過參數搭配一前一後的，回傳成為一個字串值顯示。(作業)
let ee: string = 'Good';
let ff: string = 'Morning';
console.log(ee.concat(ff));   //GoodMorning

//字串3. toLowerCase的用法，將變數定義的字串值，將值變成小寫後，再回傳回來。(作業)
let gg: string = 'Good Morning';
console.log(gg.toLowerCase());   //good morning

console.log('*'.repeat(100));

//數字 1. toFixed的用法，將變數定義的數值，轉換成數字字串後，傳回指定的小數點位數，透過()內的進位數來指定位數和四捨五入。
let cost: number = 80.388;
console.log(cost);   //80.388
let cost1 = cost.toFixed(2);
console.log(cost1);   //80.39(小數點兩位，四捨五入)
let cost2 = cost.toFixed();
console.log(cost2);   //80()空白，四捨五入成整數
console.log(typeof (cost2));   //string輸出值為字串

//數字2. toExponential的用法， 將把數字字串轉換為指數型態表示回傳，參數為指定小數點後的位數，並且四捨五入。
//這部分，可否請老師您再教導與說明?
let num: number = 99.3992158;
console.log(num);                 //99.3992158
let num0 = num.toExponential(0);
console.log(num0);                //1e+2
let num1 = num.toExponential(1);   //9.9e+1
console.log(num1);
let num2 = num.toExponential(2);   //9.94e+1 (有四捨五入)
console.log(num2);
let num3 = num.toExponential(3);   //9.940e+1 (有四捨五入)
console.log(num3);
let num4 = num.toExponential(4);   //9.9399e+1
console.log(num4);
let num5 = num.toExponential(5);   //9.93992e+1
console.log(num5);
let num6 = num.toExponential(6);   //9.939922e+1(有四捨五入)
console.log(num6);
console.log(typeof (num1));       //string
//數字2. 不同數字換算: 123.4，則為e+2 10的2次方
let numA: number = 123.4;
console.log(numA);                  //123.4
let numA0 = numA.toExponential(0);   //1e+2
console.log(numA0);
let numA1 = numA.toExponential(1);  //1.2e+2
console.log(numA1);
let numA2 = numA.toExponential(2);  //1.23e+2
console.log(numA2);
let numA3 = numA.toExponential(3);  //1.234e+2
console.log(numA3);
let numA4 = numA.toExponential(4);   //1.2340e+2
console.log(numA4);
let numA5 = numA.toExponential(5);   //1.23400e+2
console.log(numA5);
let numA6 = numA.toExponential(6);   //1.234000e+2
console.log(numA6);
console.log(typeof (numA1));       //string

//數字3 toPrecision的用法，整數部分:將把要顯示數字指定為幾位數字，()參數為指定數後，並且四捨五入。若參數定義有超過數字的範圍則用0去補\替代，轉換為數字字串後的型態回傳。
//這部分，可否請老師您再教導與說明?
let numP: number = 90.015;
console.log(numP);               //90.015
let numP0 = numP.toPrecision();
console.log(numP0);              //90.015
let numP1 = numP.toPrecision(1);
console.log(numP1);              //9e+1
let numP2 = numP.toPrecision(2);
console.log(numP2);              //90
let numP3 = numP.toPrecision(3);
console.log(numP3);              //90.0
let numP4 = numP.toPrecision(4);
console.log(numP4);              //90.02
let numP5 = numP.toPrecision(5);
console.log(numP5);              //90.015
let numP6 = numP.toPrecision(6);
console.log(numP6);              //90.0150
console.log(typeof (numP1));      //string
//數字3.toPrecision的用法，小數點的數字部分:則取小數點數字內非0的數字並且四捨五入。作為開始顯示數字，搭配()參數為指定數後，並且四捨五入。若參數定義有超過數字的範圍則用0去補\替代，轉換為數字字串後的型態回傳，
let numB: number = 0.015;
console.log(numB);                  //0.015
let numB0 = numB.toPrecision();
console.log(numB0);                  //0.015
let numB1 = numB.toPrecision(1);
console.log(numB1);                  //0.01
let numB2 = numB.toPrecision(2);
console.log(numB2);                  //0.015
let numB3 = numB.toPrecision(3);
console.log(numB3);                  //0.0150
let numB4 = numB.toPrecision(4);
console.log(numB4);                  //0.01500
let numB5 = numB.toPrecision(5);
console.log(numB5);                  //0.015000
let numB6 = numB.toPrecision(6);
console.log(numB6);                  //0.0150000
console.log(typeof (numB1));       //string

console.log('*'.repeat(100));

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值
if (money > limit) {
    console.log('您還不夠格');
} else {
    console.log('乾爹，您好');
}

