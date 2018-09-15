const address = {
  street: "17645 Avenger Ave",
  city: "Asgard",
  zipcode: 92508
};

function showAddress(input) {
  for (let key in input) console.log(key, address[key]);
}

showAddress(address);
