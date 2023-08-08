// let Ram = 12;
// let eachRam =80000;
// let discount =3/100;
// let ramDiscount =  eachRam * discount;
// let olaTotalIncome = (eachRam - ramDiscount) * 12;
// var ramPrice = eachRam - ramDiscount;



// console.log("Actual discount =" + ramDiscount);
// console.log("Total income =" + olaTotalIncome);
// console.log("Ram Price =" + ramPrice);
// console.log("Ram Discount =" + ramDiscount);
// console.log("ola's Total Income =" + olaTotalIncome);



// {
//     const markWeight = 78;
//     const markHeight = 1.69;
//     const johnWeight = 92;
//     const johnHeight = 1.95;

//     // const BMI = weight/(height**2)

// const markBmi = markWeight/markHeight**2

// const johnBmi = johnWeight/johnHeight**2

// console.log("Mark BMI :" + markBmi +" " + "kg/m**2")
// console.log("Mark BMI :" + johnBmi  +" " + "kg/m**2")

// const markHigherBmi = markBmi > johnBmi

// console.log(markHigherBmi)



// }

// {
//     const markWeight = 95;
//     const markHeight = 1.88;
//     const johnWeight = 85;
//     const johnHeight = 1.76
 
//     const markBmi = markWeight/markHeight**2
//     const johnBmi = johnWeight/johnHeight**2
    
//     console.log("Mark BMI :" + markBmi  +" " + "kg/m**2")
//     console.log("Mark BMI :" + johnBmi  +" " + "kg/m**2")

//     const markHigherBmi = markBmi > johnBmi
//     console.log(markHigherBmi)


// }

// {
//     let schoolName = "Boldlinks Technology Solution";
//     let stack = "I am a software developer";

//     let output;

//     // TO Array

//     output = schoolName.split(' ');
//     console.log(output)


//     // EXTRACT

//     output = schoolName.slice(10,21);
//     console.log(output);

//     // replace
//     output = stack.replace("developer", "engineer");
//         console.log(output)

//     // Uppercase
//     output = stack.replace("developer", "engineer");
//     output = output.split(" ");
//     output = output[4]
//     output = output.toUpperCase()
//     console.log(output);

// }


// {
//     let output;

//     let firstName;
//     let lastName;

//     firstName = "Sodiq";
//     lastName = "Adeosun";
    
    
//    let init1 = output = firstName.slice(0,1) +lastName.slice(0,1)
//     console.log(output);

//     firstName = "Favour";
//     lastName = "Ogbaago";
    
//    let init2 = output =firstName.slice(0,1) +lastName.slice(0,1)
//    console.log(output);

//    firstName = "Ayomide";
//    lastName = "Opooshun";
   
//    let init3 = output = firstName.slice(0,1) +lastName.slice(0,1)
//     console.log(output);

//   firstName = "Tunde";
//   lastName = "Olaoye";
  
//   let init4 = output = firstName.slice(0,1) +lastName.slice(0,1)
//   console.log(output);

// let InitArray = [];
// InitArray.push(init1, init2, init3, init4);


// console.log(InitArray)

// let Initials = init1 + " " + init2 + " " + init3 + " " + init4;

// console.log(Initials);

// output = Initials.split(" ");
// console.log(output);
// }

// {

//     let firstName = "Femi";
//     let lastName = "Olasupo";
//     let age = 18;

//     let firstName2 = "Tolu";
//     let lastName2 = "Adeoye";
//     let age2 = 22;

//     let firstName3 = "James";
//     let lastName3 = "Coka";
//     let age3 = 33;

//     let firstName4 = "Kemi";
//     let lastName4 = "Adesaki";
//     let age4 = 13;


//     let html;

//     html = `
//     <table>
//     <tr>
//     <th>Firstname</th>
//     <th>Lastname</th>
//     <th>Age</th>
//     <th>Eligible to vote</th>
//     </tr>

//     <tr>
//     <td>${firstName}</td>
//     <td>${lastName}</td>
//     <td>${age}</td>
//     <td>${(age >= 18? true : false)}</td>
//     </tr>

//     <tr>
//     <td>${firstName2}</td>
//     <td>${lastName2}</td>
//     <td>${age2}</td>
//     <td>${(age2 >= 18? true : false)}</td>
//     </tr>

//     <tr>
//     <td>${firstName3}</td>
//     <td>${lastName3}</td>
//     <td>${age3}</td>
//     <td>${(age3 >= 18? true : false)}</td>
//     </tr>

//     <tr>
//     <td>${firstName4}</td>
//     <td>${lastName4}</td>
//     <td>${age4}</td>
//     <td>${(age4 >= 18? true : false)}</td>
//     </tr>


//     </table>
//     `

//     document.body.innerHTML = html;
// }

// {
//     // ARRAY
//     const Mixed = [10, ['Tunde', ['Iremide', ['Ayomide', 'Sodiq']]]];
//    let Tunde  = Mixed[1][0];
//     console.log(Tunde)

//     let Iremide = Mixed[1][1][0];
//     console.log(Iremide);

//     let Ayomide = Mixed[1][1][1][0];
//     console.log(Ayomide);

//     let Sodiq = Mixed[1][1][1][1];
//     console.log(Sodiq);



// //    let Array2 =  Mixed[1]
// //    val = Array2[0]
// //     console.log(val);

// //     let Array3 = Array2[1];
// //     val = Array3[0];
// //     console.log(val);
    
// //     let Array4 = Array3[1];
// //     val = Array4[0]
// //     console.log(val);
// }

// {
//    const Data = [
//         {
//             name: 'sodiq',
//             age: 16,
//             state: 'Ogun'
//         },

//         {
//             name: 'Iremide',
//             age: 17,
//             state: 'Ogun'
//         },

//         {
//             name: 'Favour',
//             age: 18,
//             state: 'Kogi'
//         },

//         {
//             name: 'Ayomide',
//             age: 19,
//             state: 'Osun'
//         }



//     ]

//     let Html;

//     Html = `
//     <table>
//     <tr>
//     <th>NAME</th>
//     <th>AGE</th>
//     <th>STATE</th>
//     </tr>

//     <tr>
//     <td>${Data[0].name}</td>
//     <td>${Data[0].age}</td>
//     <td>${Data[0].state}</td>
//     </tr>

//     <tr>
//     <td>${Data[1].name}</td>
//     <td>${Data[1].age}</td>
//     <td>${Data[1].state}</td>
//     </tr>

//     <tr>
//     <td>${Data[2].name}</td>
//     <td>${Data[2].age}</td>
//     <td>${Data[2].state}</td>
//     </tr>

//     <tr>
//     <td>${Data[3].name}</td>
//     <td>${Data[3].age}</td>
//     <td>${Data[3].state}</td>
//     </tr>

//     </table>
//     `
//     document.body.innerHTML = Html;
// }

// {
//     let val;
//     for ( let i = 1; i < 100; i++){
//         if(i % 2 == 0){
//             val = i;
// //             console.log(val);
   
//         }
//     }
// }

// {
//     const Data = [
//         {
//             name: 'sodiq',
//             age: 16,
//             state: 'Ogun'
//         },

//         {
//             name: 'Iremide',
//             age: 17,
//             state: 'Ogun'
//         },

//         {
//             name: 'Favour',
//             age: 18,
//             state: 'Kogi'
//         },

//         {
//             name: 'Ayomide',
//             age: 19,
//             state: 'Osun'
//         }
//     ]

//     let Html = "";
//     for (let i = 0; i < Data.length; i++) {
//         let val = Data[i]
//        console.log(val)  
//        Html += `
//     <ul>
//     <li>${val.name}</li>
//     <li>${val.age}</li>
//     <li>${val.state}</li>
//     </ul>
//     `
//     }
    
//     document.body.innerHTML = Html;
// }


{
    const Data = [
        {
            name: 'sodiq',
            age: 16,
            state: 'Ogun'
        },

        {
            name: 'Iremide',
            age: 17,
            state: 'Ogun'
        },

        {
            name: 'Favour',
            age: 18,
            state: 'Kogi'
        },

        {
            name: 'Ayomide',
            age: 19,
            state: 'Osun'
        }
    ]
    
    let html = "";

    for (const x of Data) {
        html += `
        <ul>
        <li>${x.name}</li>
        <li>${x.age}</li>
        <li>${x.state}</li>
        </ul>
        `
        // document.body.innerHTML = html;

        
    }
}


{
    let colour = "Yellow";

    if (colour == "Yellow") {
        console.log(`${colour} is correct`); 

    } else if (colour == "Red") {
        console.log(`${colour} is correct`);

    } else if (colour == "Green") {
        console.log(`${colour} is correct`);

    }else if (colour == "Blue") {
        console.log(`${colour} is correct`);

    }else if (colour == "Black") {
        console.log(`${colour} is correct`);
        
    } else {
        console.log("colour not found");
    }
}

{
    
    function Add(a , b) {
        return (a + b)
    }
    const Addition = Add(10 , 20)
    console.log(Addition)

}

{
    function Subt(a , b) {
        return (a - b)
    }
    const Subtraction = Subt(20 , 20)
    console.log(Subtraction)

}

{
    function Mult(a , b) {
        return (a * b)
    }
    const Multiplication = Mult(20 , 20)
    console.log(Multiplication)
}

{
    function Div(a , b) {
        return (a / b)
    }
    const Division = Div(20 , 20)
    console.log(Division)
}

// {

//     function foodProcessor(mangoe , orange){
//         return (mangoe + orange);
//     }
//     const fruitJuice = foodProcessor(2 , 5);
//     console.log(fruitJuice)
// }

{
    const name = ["sodiq", "father", "mother", "Ire",  "favour"];
   let name1 = name.slice(1, 3);
   console.log(name1);

}

{
    const points = [40, 100, 1, 5, 25, 10];
let point1 = points.sort((a, b) => a - b);
console.log(point1)
}

// REVERSE LOOPING

{
    for (i = 5; i >=0; i--){
        console.log(i);
    }
}

{
    // SWITCH
   
        
    }
let  score = 70;
    switch (score) {
        case  70:
            console.log('distintion')
            break;
        case  60:
            console.log('Upper')
            break;
        case 50:
            console.log('Lower');
            break;
        case 40:
            console.log('Pass');
            break;
        default:
        console.log('Fail');
    }

    // console.log(70);

{
    const calcAge = (birthYear) => (2023 - birthYear) ;


    function yearUntilRetire (birthYear, name) {
        const age = calcAge(birthYear);
        const retireAge = 65 - age;

         return `${name} retires in ${retireAge} years`;
    }
    console.log(yearUntilRetire( 1991, "John"));
    console.log(yearUntilRetire( 2000, "Mike"));

}







{
    function fruitSlice (fruit) {
        return fruit * 4;
    }
    

    function fruitProcessor(mangoe , orange){
        const numberOfMangoes = fruitSlice(mangoe)
        const numberOfOranges = fruitSlice(orange)

        return (`This fruit juice is made from ${mangoe} mangoes and ${orange} oranges, making total of ${mangoe + orange} pieces of fruits`);
       
       
    }
    console.log(fruitProcessor(5, 10))
   
}

{
    //TEST DAT 1
    let Dolphins = [44, 23, 71];
    let Kaolas = [65, 54, 49];

    const calcAverage = (a, b, c) => (a + b + c) / 3;
    let avgDolphins = calcAverage(44, 23, 71);
    let avgkaolas = calcAverage(65, 54, 49)


   console.log("Dolphins Average = " + avgDolphins);
   console.log("Kaolas Average = " + avgkaolas);

   

   function checkWinner(A, B) {
   if (A >= 2 * B) {
        console.log("Dolphins" + " " + "win");
    } 
    else if (B >= 2 * A){
    console.log("Kaolas" + " " + "win");
       } else {
            console.log("no team wins");

       }
    }
   checkWinner(avgDolphins, avgkaolas);

    
   // TEST DATA 2
   
//    let Dolphins = [85, 54, 41];
//    let Kaolas = [23, 34, 27];

   const calcAverage2 = (a, b, c) => (a + b + c) / 3;
   let avgDolphins2 = calcAverage2(85, 54, 41);
   let avgKaolas2 = calcAverage2(23, 34, 27)


  console.log("Dolphins Average = " + avgDolphins2);
  console.log("Kaolas Average = " + avgKaolas2);


  function checkWinner2(A2, B2) {
    if (A2 >= 2 * B2) {
        return `Dolphins  win`
        //  console.log("Dolphins" + " " + "win");
     }
     else if (B2 >= 2 * A2){
        return `Kaolas + win`
    //  console.log("Kaolas" + "win");
        } else {
            return `no team wins`
            //  console.log("no team wins");
 
        }
     }
 console.log(checkWinner2(avgDolphins2, avgKaolas2));
}


{
    const studentAge = [1985, 1990, 2003, 2001];
 function Age(studentAge){
  return 2023 - studentAge
  }
    for (let i = 0; i < studentAge.length; i++) {
        let Ages = Age(studentAge[i])
        console.log(Ages);    
 }


}


{
    //FUNCTION TO CALCULATE TIPS
    function calacTip(bill) {
        if (bill >=50 && bill <=300) {
            return bill * (15/100);
        } else{
        return bill * (20/100);}
    }
    // console.log(calacTip(44));


    let bills = [125, 555, 44];

    let tips = [];

    for (let i = 0; i < bills.length; i++) {
        
        tips.push(calacTip(bills[i]));        
    }
    console.log(tips);

    // let tip1 = calacTip(bills[0]);
    // let tip2 = calacTip(bills[1]);
    // let tip3 = calacTip(bills[2]);

    // tips.push(tip1, tip2, tip3);
    // console.log(tips);

    let total = [];
    total.push((bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2]));
    console.log(total);

}

// {

//     let bills = [125, 555, 44];
//     let tips = [];
//     for (let i = 0; i < bills.length; i++) {
        
//         tips.push(calacTip(bills[i]));        
//     }
//     console.log(tips);

    
//     let tip1 = calacTip(bills[0]);
//     let tip2 = calacTip(bills[1]);
//     let tip3 = calacTip(bills[2]);

// }

// {
//     //OBJECTS

//     const person = {
//         firstName : 'Favour',
//         lastName : 'Ogbaago',
//         age : 300,
//         job : 'developer',
//         collegues : ['Favour', 'Iremide', 'Ayomide', 'Adams']
//     }
//     // let infomation = prompt(`What infomation do you need : firstName, lastName, age, job, collegues `);

//     if (person[infomation]) {
//         console.log(person[infomation]);
//     }else {
//         console.log("data not found");
//     }

//     let details = `${person.firstName} has ${person.collegues.length} friends, his bestfriend is called ${person.collegues[2]}`
//     console.log(details);
// }

{
    let type = [];
    const boldLinks = ['Iremide', 'Ayomide', 2023-1991, ['Sodiq', 'Tunde', 'Favour',], true];
    for (let i = 0; i < boldLinks.length; i++) {
        type.push(typeof(boldLinks[i]))
    }
    console.log( type);

}

{ let total = 0;
    const age = [46, 35, 26, 24, 30, 49, 50];
for (let i = 0; i < age.length; i++) {
     total += age[i];    
}
console.log(total);

    // function sum(total,num) {
    //     return total + Math.round(num);
    // }
    // console.log(age.reduce(sum, 0));

}

{
    const birthYear = [1991, 2000, 1985, 1986, 1987, 1988];
    const birthYear2 = [1991, 1993,1990, 2000, 1985, 1986, 1987, 1988]; 
    let total = 0;
    // for (let i = 0; i < birthYear.length; i++) {
    //     const age = 2023 -birthYear[i];
    //     console.log(age);
    //     total += age;
    // }
    // console.log(total);

    function calcAverage(n) {
        for (let i = 0; i < n.length; i++) {
            const age = 2023 - n[i];
            console.log(age);
             total += age;
        }
        console.log(total);
        return total / n.length
    }
    console.log(calcAverage(birthYear));

}


// {

//     document.querySelector('#bkg').style.backgroundColor = 'red';
//     document.querySelector('h1:nth-child(2)').style.backgroundColor = 'orange';
//     document.querySelector('h1:nth-child(3)').style.backgroundColor = 'green';
//     document.querySelector('h1:nth-child(4)').style.backgroundColor = 'blue';

// }

// {

//     function lion() {
//         document.querySelector('#animals').src = "pictures/lion.jpg";
//     }

//     function tiger() {
//         document.getElementById('animals').src = "pictures/tiger.jpg"
//     }

//     function elephant() {
//         document.getElementById('animals').src = "pictures/leopard.jpg"
//     }

//     function leopard() {
//         document.getElementById('animals').src = "pictures/leopard.jpg"
//     }
// }


    // CALCULATOR

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let add = document.querySelector('.add');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let result = document.querySelector('.result');


add.addEventListener( 'click', function () {
    let value1 = Number(num1.value);
    let value2  = Number(num2.value);
    let total = value1 + value2;
    result.value = total;
    num1.value = "";
    num2.value = "";
})

minus.addEventListener( 'click', function () {
    let value1 = Number(num1.value);
    let value2  = Number(num2.value);
    let total = value1 - value2;
    result.value = total;
    num1.value = "";
    num2.value = "";
})

multiply.addEventListener( 'click', function () {
    let value1 = Number(num1.value);
    let value2  = Number(num2.value);
    let total = value1 * value2;
    result.value = total;
    num1.value = "";
    num2.value = "";
})

divide.addEventListener( 'click', function () {
    let value1 = Number(num1.value);
    let value2  = Number(num2.value);
    let total = value1 / value2;
    result.value = total;
    num1.value = "";
    num2.value = "";
})

{
    let stat = [23, 42, 88, 30, 50, 65, 30];
    let total = 0;

    const mean = function (n) {
        for (let i = 0; i < n.length; i++) {
             total += n[i];
        }
        return total /stat.length
    }
    console.log(mean(stat));


    function median(n) {
        const sortedn = n.sort((a, b) => a - b);
        console.log(sortedn);
        const middleIndex = Math.floor(sortedn.length / 2);
        
        if (sortedn.length % 2 === 0) {
            return (sortedn[middleIndex - 1] + sortedn[middleIndex]) / 2;
        } else {
            return sortedn[middleIndex];
        }
    }
        console.log(median(stat));

    
        function calculateMode(numbers) {
            if (numbers.length === 0) {
              return null;
            }
          
            const frequencyMap = new Map();
            let maxFrequency = 0;
            let mode = null;
          
            numbers.forEach((num) => {
              if (!frequencyMap.has(num)) {
                frequencyMap.set(num, 1);
              } else {
                const currentFrequency = frequencyMap.get(num) + 1;
                frequencyMap.set(num, currentFrequency);
                if (currentFrequency > maxFrequency) {
                  maxFrequency = currentFrequency;
                  mode = num;
                }
              }
            });
          
            return mode;
          }
          console.log(calculateMode(stat));
}