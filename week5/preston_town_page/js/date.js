const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

document.getElementById('currentdate');
currentdate.textContent = date.toLocaleDateString('en-GB', options);

document.getElementById('theYear');
theYear.textContent = date.getFullYear();


function bannerCalculator() {
  const today = d.getDay();
  const pancake = document.querySelector(".pancake");
  
  if (today = 3) {
      pancake.style.display = 'block';
  }
  
  else {
      pancake.style.display = 'none';
  }
}





