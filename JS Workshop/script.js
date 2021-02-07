$(document).ready(function(){

// 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.
// 30 mins

$('button:first').click(function(){
    let inputNo=$('input:first').val().toString();
    let result=[inputNo[0]];
    
    console.log(inputNo);

    for (let i=1;i<inputNo.length;i++){
        if(inputNo[i-1]%2===0 && inputNo[i]%2===0){
            result.push('-',inputNo[i])
        }
        else{
            result.push(inputNo[i])
        }
    }
    $('h3:first').text(result.join(''));

})

// 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
// 30 mins


arrayNumbersDivisibleBy3And7=[];
function result() 
{      
    
    for (let i= 1; i <= 100; i++) 
    {      
     
        if ((Math.floor(i/10)+(i%10)) % 3 == 0 && i%7==0)
            {
               arrayNumbersDivisibleBy3And7.push(i);
            }
    } 
}
result();
console.log(arrayNumbersDivisibleBy3And7)



// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins

let moneyOnAccount=50;
$('button:last').click(function(){
    $(`#task3`).html(`<input placeholder='Enter amount of money!'></input><button>Deposit money</button><button>Withdraw money</button><button>Check Balance</button><button>Exit</button><h3></h3>`)
    
    $('#task3').find('button').first().click(function(){
        if($('#task3').find('input').val()==''){
            $('h3:last').text(`Please enter money amount!`)
        }
        else{
            moneyOnAccount=moneyOnAccount+parseInt($('#task3').find('input').val());
            $('h3:last').text(`You deposited ${parseInt($('#task3').find('input').val())}$, now the current balance of your account is ${moneyOnAccount}$`)
        }
        
    })

    $('#task3').find('button').first().next().click(function(){
        if($('#task3').find('input').val()==''){
            $('h3:last').text(`Please enter money amount!`)
        }
        else{
            moneyOnAccount=moneyOnAccount-parseInt($('#task3').find('input').val());
        $('h3:last').text(`You withdraw ${parseInt($('#task3').find('input').val())}$ and now the current balance of your account is ${moneyOnAccount}`)
        }
    })

    $('#task3').find('button').first().next().next().click(function(){
        $('h3:last').text(`The current balance of your account is ${moneyOnAccount}$`)
    });

    $('#task3').find('button').first().next().next().next().click(function(){
        $('h3:last').text(`Thank you for using our ATM!`);
        $('#task3').find('input').remove();
        $('#task3').find('button').first().remove();
        $('#task3').find('button').first().next().remove();
        $('#task3').find('button').first().next().next().remove();
        $('#task3').find('button').last().remove();
    })
})

})