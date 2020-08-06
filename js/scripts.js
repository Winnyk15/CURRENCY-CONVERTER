const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
    const temp = from_currencyEl.value;
    from_currencyEl.value = to_currencyEl.value;
    to_currencyEl.value = temp;
    calculate();
});

function calculate() {
    const from_currency = from_currencyEl.value;
    const to_currency = to_currencyEl.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[to_currency];
            rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
            to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        })
}

calculate();

//function convertCurrency(){
  //  var from = document.getElementById("from").value;
  //  var to = document.getElementById("to").value;
  //  var xmlhttp = new XMLHttpRequest();
  //  var url = "https://api.exchangeratesapi.io/latest/" + from + "," + to;
  //  xmlhttp.open("GET", url, true);
  //  xmlhttp.send();
  //  xmlhttp.onreadystatechange = function(){
    //    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
      //      var result = xmlhttp.responseText;
        //    alert(result);
        //    var jsResult = JSON.parse(result);
        //    var oneUnit = jsResult.rates[from];
        //    var amt = document.getElementById("fromAmount").value;
        //    document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
      //  };
   // };
//};

//0ef91cfec079b086c645
