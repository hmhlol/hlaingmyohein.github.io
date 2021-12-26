let data1 = "0"

let bill = "0"

let people = "0"


function Reset(){
    window.location = '';
}

document.querySelector(".custom-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        CustomCalc();
    }
});

function Calc(bill,people,data){
    // console.log(data);

    var bill = bill;
    var people = people;
    if(people<=0){
        document.querySelector('.tip-ans').innerHTML = '$0.00'; 
        document.querySelector('.total-ans').innerHTML = '$0.00'; 
    }
    else{
        var tip = data * bill / 100;
        var total = bill / people + tip;

        document.querySelector('.tip-ans').innerHTML = '$'+tip.toFixed(3);
        document.querySelector('.total-ans').innerHTML = '$'+total.toFixed(3); 
    }
    
}


document.querySelector('.input-bill').addEventListener('change', function(evt) {
    bill = this.value;
    document.querySelector('.input-people').addEventListener('change',function(evt){
            if(this.value<=0){
                document.querySelector('.people-form ').classList.add('err-border');
                document.querySelector('.people-err').innerHTML = "Can't be zero"; 
            }
            else{
                // document.querySelector('.bill-err').innerHTML = "";
                // document.querySelector('.bill-form').classList.remove('err-border');
    
                document.querySelector('.people-form ').classList.remove('err-border');
                document.querySelector('.people-err').innerHTML = "";

                document.querySelector('.custom-input').value = "Custom";

                people = this.value;                     
            }  
    })
    
});


document.querySelector('.no1').addEventListener('click',function(evt){
    // console.log(this.value);
    var data1 = this.value;
    Calc(bill,people,parseInt(data1));
    document.querySelector('.custom-input').value = "Custom";
    for(var i = 1; i < 6; i++){
        document.querySelector('.no'+i).classList.remove('active');
    }
    document.querySelector('.no1').classList.add('active');
})

document.querySelector('.no2').addEventListener('click',function(evt){
    // console.log(this.value);
    var data1 = this.value;
    Calc(bill,people,parseInt(data1));
    document.querySelector('.custom-input').value = "Custom";
    for(var i = 1; i < 6; i++){
        document.querySelector('.no'+i).classList.remove('active');
    }
    document.querySelector('.no2').classList.add('active');
})

document.querySelector('.no3').addEventListener('click',function(evt){
    // console.log(this.value);
    var data1 = this.value;
   Calc(bill,people,parseInt(data1));
   document.querySelector('.custom-input').value = "Custom";
   for(var i = 1; i < 6; i++){
    document.querySelector('.no'+i).classList.remove('active');
    }
    document.querySelector('.no3').classList.add('active');
})

document.querySelector('.no4').addEventListener('click',function(evt){
    // console.log(this.value);
    var data1 = this.value;
   Calc(bill,people,parseInt(data1));
   document.querySelector('.custom-input').value = "Custom";
   for(var i = 1; i < 6; i++){
    document.querySelector('.no'+i).classList.remove('active');
    }
    document.querySelector('.no4').classList.add('active');
})

document.querySelector('.no5').addEventListener('click',function(evt){
    // console.log(this.value);
    var data1 = this.value;
   Calc(bill,people,parseInt(data1));
   document.querySelector('.custom-input').value = "Custom";
   for(var i = 1; i < 6; i++){
    document.querySelector('.no'+i).classList.remove('active');
    }
    document.querySelector('.no5').classList.add('active');
})

document.querySelector('.custom-input').addEventListener('change',function(evt){
    var data1 = this.value;
    Calc(bill,people,parseInt(data1));
    for(var i = 1; i < 6; i++){
        document.querySelector('.no'+i).classList.remove('active');
    }
})
