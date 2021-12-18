var daily_current = [];
var daily_previous = [];
var weekly_current = [];
var weekly_previous = [];
var monthly_current = [];
var monthly_previous = [];

var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');


fetch("data.json")
  .then(response => response.json())
  .then(json => {
    //   console.log(json[0]['timeframes']['daily']['current']);
      for(var i=0; i<6;i++){
        var daily = json[i]['timeframes']['daily']['current'];
        var daily_pre = json[i]['timeframes']['daily']['previous'];
        var weekly = json[i]['timeframes']['weekly']['current'];
        var weekly_pre = json[i]['timeframes']['weekly']['previous'];
        var monthly = json[i]['timeframes']['monthly']['current'];
        var monthly_pre = json[i]['timeframes']['monthly']['previous'];

        daily_current.push(daily);
        daily_previous.push(daily_pre);

        weekly_current.push(weekly);
        weekly_previous.push(weekly_pre);

        monthly_current.push(monthly);
        monthly_previous.push(monthly_pre);

        // console.log(daily_current);
        // console.log(daily_previous);
      }

  });

function daily_record(){
    p2.classList.remove('active');
    p3.classList.remove('active');
    p1.classList.add('active');

    document.querySelector('.current1').innerHTML = daily_current[0] + "hrs";
    document.querySelector('.current2').innerHTML = daily_current[1] + "hrs";
    document.querySelector('.current3').innerHTML = daily_current[2] + "hrs";
    document.querySelector('.current4').innerHTML = daily_current[3] + "hrs";
    document.querySelector('.current5').innerHTML = daily_current[4] + "hrs";
    document.querySelector('.current6').innerHTML = daily_current[5] + "hrs";

    document.querySelector('.previous1').innerHTML = "Last Week - " + daily_previous[0] + "hrs";
    document.querySelector('.previous2').innerHTML = "Last Week - " + daily_previous[1] + "hrs";
    document.querySelector('.previous3').innerHTML = "Last Week - " + daily_previous[2] + "hrs";
    document.querySelector('.previous4').innerHTML = "Last Week - " + daily_previous[3] + "hrs";
    document.querySelector('.previous5').innerHTML = "Last Week - " + daily_previous[4] + "hrs";
    document.querySelector('.previous6').innerHTML = "Last Week - " + daily_previous[5] + "hrs";
}


function weekly_record(){
    p1.classList.remove('active');
    p3.classList.remove('active');
    p2.classList.add('active');

    document.querySelector('.current1').innerHTML = weekly_current[0] + "hrs";
    document.querySelector('.current2').innerHTML = weekly_current[1] + "hrs";
    document.querySelector('.current3').innerHTML = weekly_current[2] + "hrs";
    document.querySelector('.current4').innerHTML = weekly_current[3] + "hrs";
    document.querySelector('.current5').innerHTML = weekly_current[4] + "hrs";
    document.querySelector('.current6').innerHTML = weekly_current[5] + "hrs";

    document.querySelector('.previous1').innerHTML = "Last Week - " + weekly_previous[0] + "hrs";
    document.querySelector('.previous2').innerHTML = "Last Week - " + weekly_previous[1] + "hrs";
    document.querySelector('.previous3').innerHTML = "Last Week - " + weekly_previous[2] + "hrs";
    document.querySelector('.previous4').innerHTML = "Last Week - " + weekly_previous[3] + "hrs";
    document.querySelector('.previous5').innerHTML = "Last Week - " + weekly_previous[4] + "hrs";
    document.querySelector('.previous6').innerHTML = "Last Week - " + weekly_previous[5] + "hrs";
}

function monthly_record(){
    p1.classList.remove('active');
    p2.classList.remove('active');
    p3.classList.add('active');

    document.querySelector('.current1').innerHTML = monthly_current[0] + "hrs";
    document.querySelector('.current2').innerHTML = monthly_current[1] + "hrs";
    document.querySelector('.current3').innerHTML = monthly_current[2] + "hrs";
    document.querySelector('.current4').innerHTML = monthly_current[3] + "hrs";
    document.querySelector('.current5').innerHTML = monthly_current[4] + "hrs";
    document.querySelector('.current6').innerHTML = monthly_current[5] + "hrs";

    document.querySelector('.previous1').innerHTML = "Last Week - " + monthly_previous[0] + "hrs";
    document.querySelector('.previous2').innerHTML = "Last Week - " + monthly_previous[1] + "hrs";
    document.querySelector('.previous3').innerHTML = "Last Week - " + monthly_previous[2] + "hrs";
    document.querySelector('.previous4').innerHTML = "Last Week - " + monthly_previous[3] + "hrs";
    document.querySelector('.previous5').innerHTML = "Last Week - " + monthly_previous[4] + "hrs";
    document.querySelector('.previous6').innerHTML = "Last Week - " + monthly_previous[5] + "hrs";
}



