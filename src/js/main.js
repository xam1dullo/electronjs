const demo = document.querySelector('#demo');
const nameVal = document.querySelector('#nameVal');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  // nameVal.textContent = event.target[0].value;
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');

  p1 = event.target[0].value;
  p22 = event.target[1].value;
  p33 = event.target[2].value;
  p44 = event.target[3].value;
  p55 = event.target[4].value;
  p66 = event.target[5].value;
  
  if (!p1 || !p22 || !p33 || !p44 || !p55 || !p66) {
    alert("Hamma qiymatlarni kiriting!")
    }
  p.textContent = event.target[0].value;
  p2.textContent = event.target[1].value;
  p3.textContent = event.target[2].value;
  p4.textContent = event.target[3].value;
  p5.textContent = event.target[4].value;
  p6.textContent = event.target[5].value;

  demo.appendChild(p);
  demo.appendChild(p2);
  demo.appendChild(p3);
  demo.appendChild(p4);
  demo.appendChild(p5);
  demo.appendChild(p6);
});
