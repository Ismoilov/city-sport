import $ from "jquery";
import './common';

// $(document).ready(function () {
//   $("#ajax").click(function () {
//     $.get("https://jsonplaceholder.typicode.com/todos/1", function (data, status) {
//       alert("Data: " + data.title + "\nStatus: " + status);
//       console.log(data.title, status);
//     });
//   });
// });

const sportType = {};
const sportTypes = document.querySelectorAll('#sportTypes div a');
const selectedSport = document.querySelector('#sportTypes .dropdown-active');
let sport = '';
sportTypes.forEach(element => {
  element.addEventListener('click', () => {
    if (sport !== element.innerHTML) {
      selectedSport.innerHTML = element.innerHTML;
      sport = element.innerHTML;
      sportType.sport = [sport];
      // console.log(sportType);
    }
  })
});

const filter = document.querySelector('.filter');
const filterItems = filter.querySelector('.filter-items')
const filterBtn = filter.querySelector('.dropdown-active');
const inputs = filter.querySelectorAll('.radio input');
const minPrice = document.querySelector('#minPrice');
const maxPrice = document.querySelector('#maxPrice');
const metro = document.querySelector('#metro');
const district = document.querySelectorAll('#district .dropdown-items a');
const districtSelected = document.querySelector('#district .dropdown-active');
let districtData = '';
const filterData = {};

filterBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  filter.classList.toggle('clicked');
});

filterItems.addEventListener('click', (event) => {
  event.stopPropagation();
});

window.onclick = function () {
  filter.classList.remove("clicked");
}

inputs.forEach(element => {
  element.addEventListener('change', () => {
    filterData.type = element.value;
    console.log(filterData);
  })
});

minPrice.addEventListener('change', () => {
  filterData.minPrice = minPrice.value;
  console.log(filterData);
})

maxPrice.addEventListener('change', () => {
  filterData.maxPrice = maxPrice.value;
  console.log(filterData);
})

metro.addEventListener('change', () => {
  filterData.metro = metro.value;
  console.log(filterData);
})

district.forEach(element => {
  element.addEventListener('click', () => {
    if (districtData !== element.innerHTML) {
      districtSelected.innerHTML = element.innerHTML;
      districtData = element.innerHTML;
      filterData.district = districtData;
      console.log(filterData);
    }
  })
});

// const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', () => {
//   for (const prop of Object.getOwnPropertyNames(filterData)) {
//     delete filterData[prop];
//   }
//   console.log(filterData)
// })

// const items = document.querySelector('.items');
// const html = `<a href="#" class="item">
// <div class="img">
//   <img src="./assets/images/basketball.jpg" alt="">
//   <span>от 120 000 UZS</span>
// </div>
// <div class="content">
//   <div>
//     <h6>Настольный теннис на 1905 года</h6>
//     <span>
//       <img src="./assets/images/icons/location.svg" alt="location"
//         title="Icon made by Freepik from www.flaticon.com">
//       ЦАО, улица 1905 года, 7с
//     </span>
//     <span>
//       <img src="./assets/images/icons/football-field.svg" alt="sport field"
//         title="Icon made by Freepik from www.flaticon.com">
//       Терафлекс
//     </span>
//     <span>
//       <img src="./assets/images/icons/metro.svg" alt="metro" title="Icon made by Freepik from www.flaticon.com">
//       Улица 1905 года
//     </span>
//   </div>
//   <div class="new">
//     <div>new</div>
//   </div>
// </div>
// </a>`;

// let fragmentFromString = function (strHTML) {
//   return document.createRange().createContextualFragment(strHTML);
// }

// let fragment = fragmentFromString(html);
// items.appendChild(fragment);


// radio.forEach(element => {
//   element.addEventListener('click', () => {
//     // if (element.classList.contains('active')) {
//     //   element.classList.remove('active');
//     // }
//     element.classList.toggle('active');
//   })
// });
