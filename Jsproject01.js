const currency_start = document.getElementById('currency-start');
const currency_end = document.getElementById('currency-end');

const amount_start = document.getElementById('amount-start');
const amount_end = document.getElementById('amount-end');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');


currency_start.addEventListener('change', calculatemoney);
currency_end.addEventListener('change', calculatemoney);
amount_start.addEventListener('input', calculatemoney);
amount_end.addEventListener('input', calculatemoney);

function calculatemoney (){
    const start = currency_start.value;
    const end = currency_end.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${start}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.rates[end];
        rateText.innerText = `1 ${start} = ${rate} ${end}`;
        amount_end.value = (amount_start.value*rate).toFixed(2);
    });
};

swap.addEventListener('click', ()=> {
    const temp =  currency_start.value; //ต้นทาง
    currency_start.value = currency_end.value;
    currency_end.value = temp;
    calculatemoney();
});

calculatemoney();