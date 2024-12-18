const people = [
  {name: "Bob", street: "street 1", city: "brisbane", state: "NSW", country: "Australia", telephone: "123456", birthday: "30 Nov"},
  {name: "Jeremy", street: "street 2", city: "Sydney", state: "NSW", country: "Australia", telephone: "45645567", birthday: "11 Nov"},
  {name: "Gary", street: "street 3", city: "Melborne", state: "VIC", country: "Australia", telephone: "34555666", birthday: "7 July"},
];

const navbarList = document.getElementById('navbar-list');

people.forEach( (man) => {
  navbarList.innerHTML += `<li id=${man.name}>${man.name}</li>`;
} );

const navbar = document.getElementById('navbar');

navbar.addEventListener('click', (event) => {

  //Highlight only selected in the pane.
  const navbarListInner = document.querySelectorAll('li');
  navbarListInner.forEach((li) => {
    li.style.removeProperty('background-color')
  })
  let person = document.getElementById(event.target.id);
  if (person.nodeName === 'LI') {
  person.style.backgroundColor = '#EEEEFF' };

  //Load the person information in details pane.
  people.forEach( (man) => {
    let detailPane = document.getElementById('detail-pane');

    if (man.name === event.target.id) {
      detailPane.innerHTML = ''
      detailPane.innerHTML += `
        <p>Name: ${man.name}</p>
        <p>Address: ${man.street} ${man.city} ${man.state} ${man.country} </p>
        <p>Telephone: ${man.telephone}</p>
        <p>Birthday: ${man.birthday}</p>`;
    }

    
  } );

});