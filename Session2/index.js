const box = document.getElementById('box1');


box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

const fox = document.getElementById('box2');


fox.addEventListener('mouseover', function handleMouseOver() {
  fox.style.color = 'red';
});


fox.addEventListener('mouseout', function handleMouseOut() {
  fox.style.color = 'black';
});
