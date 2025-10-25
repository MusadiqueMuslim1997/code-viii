let num = document.getElementById('a');
// num.innerHTML=x
let print = document.getElementById('print')
x = Number(prompt("Enter any number",5))
y = Number(prompt("Table length",10))
num.innerHTML=x;
for(i=1; i<=y; i++){
    print.innerHTML += `${x} x ${i} = ${x * i}<br/>`;


}