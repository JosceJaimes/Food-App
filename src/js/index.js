const space = document.getElementById('result')

const getlocation = (adress) =>{
   const location = adress.location;
   const {lng, lat } = location;

   const ubication = {
    lng, 
    lat
   }
   return ubication;
   
  
}
const getContact = (restaurant) =>{
    const contacto = restaurant.contact;
    const adress = restaurant.address
    const location = getlocation(adress);    
    const {site, email, phone } = contacto
    const {street, city, state } = adress
    const dataContact = {
      site, 
      email, 
      phone,
      street, 
      city,
      state,
      location
    }
    // console.log(dataContact);
    
    return dataContact
    
}
 

const getData = (data) => {
  console.log(data)
    data.forEach(element => {
    const restaurant = element;
    // console.log(restaurant)
    const {id, rating, name } = restaurant
    const contact = getContact(restaurant)


    const compleatData = {
      id, 
      rating, 
      name,
      contact, 
    }

    space.innerHTML += `
    <div class="container">
    <p>${compleatData.name}</p>
    <p>${compleatData.rating}</p>
    <p>${compleatData.contact.email}</p>
    <p>${compleatData.contact.phone}</p>
    <p>${compleatData.contact.street}</p>
    <p>${compleatData.contact.city}</p>
    <p>${compleatData.contact.state}</p>
    <p>${compleatData.id}</p>
    </div>
    <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#${compleatData.id}">
    Ubicacion
  </a>
    
    <div class="modal fade" id="${compleatData.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${compleatData.id}">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>${compleatData.id}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`
    
  });


};