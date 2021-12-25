function Calc(data,no){
    var bill = document.querySelector('.input-bill').value;
    var people = document.querySelector('.input-people').value;
    
    if(bill == 0){
        document.querySelector('.bill-err').innerHTML = "Can't be zero";
        document.querySelector('.bill-form').classList.add('err-border');
    }else if(people==0){
        document.querySelector('.people-form ').classList.add('err-border');
        document.querySelector('.people-err').innerHTML = "Can't be zero";
    }
    else{
        document.querySelector('.bill-err').innerHTML = "";
        document.querySelector('.bill-form').classList.remove('err-border');

        document.querySelector('.people-form').classList.remove('err-border');
        document.querySelector('.people-err').innerHTML = "";

        document.querySelector('.custom-input').value = "Custom";
        
        document.querySelector('.no6').classList.remove('err-border');

        for(var i = 1; i < 6; i++){
            document.querySelector('.no'+i).classList.remove('active');
        }
        document.querySelector('.'+no).classList.add('active');
       
        var tip = data * bill / 100;
        // console.log(tip);

        var total = bill / people + tip;
        // console.log(total);

        document.querySelector('.tip-ans').innerHTML = '$'+tip.toFixed(3);
        document.querySelector('.total-ans').innerHTML = '$'+total.toFixed(3);
    }
}

function CustomCalc(){
    var bill = document.querySelector('.input-bill').value;
    var people = document.querySelector('.input-people').value;
    var data = document.querySelector('.custom-input').value;

    if(data <= 0){
        // console.log('error');
        document.querySelector('.no6').classList.add('err-border');
    }
    else{
        if(bill == 0){
            document.querySelector('.bill-err').innerHTML = "Can't be zero";
            document.querySelector('.bill-form').classList.add('err-border');
        }else if(people==0){
            document.querySelector('.people-form ').classList.add('err-border');
            document.querySelector('.people-err').innerHTML = "Can't be zero";
        }
        else{
            document.querySelector('.bill-err').innerHTML = "";
            document.querySelector('.bill-form').classList.remove('err-border');
    
            document.querySelector('.people-form').classList.remove('err-border');
            document.querySelector('.people-err').innerHTML = "";

            document.querySelector('.no6').classList.remove('err-border');
    
            for(var i = 1; i < 6; i++){
                document.querySelector('.no'+i).classList.remove('active');
            }

            var tip = data * bill / 100;
            // console.log(tip);
    
            var total = bill / people + tip;
            // console.log(total);
    
            document.querySelector('.tip-ans').innerHTML = '$'+tip.toFixed(3);
            document.querySelector('.total-ans').innerHTML = '$'+total.toFixed(3);
        }
    }
    
}

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