const space = document.getElementById('result');
// const key_apy = 'AIzaSyCKhOEz3dfatjCWwBhezu_dxR7KgNoCYIU'
const mapas = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCKhOEz3dfatjCWwBhezu_dxR7KgNoCYIU&callback=initMap'


const initMap = (adress) => {
  const location = adress.location;
  // console.log(location.lng)
  const { lng, lat } = location;

  //    let map = new google.maps.Map(document.getElementById('map'), {
  //        center: {lat, lng},
  //        zoom:8
  //    })

  const ubication = {
    lng,
    lat
  }

  console.log(ubication)
  return ubication;


}
const getContact = (restaurant) => {
  const contacto = restaurant.contact;
  const adress = restaurant.address
  const location = initMap(adress);
  const { site, email, phone } = contacto
  const { street, city, state } = adress
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
    const { id, rating, name, img } = restaurant
    console.log(img);
    const contact = getContact(restaurant)


    const compleatData = {
      id,
      rating,
      name,
      img,
      contact,
    }

    space.innerHTML += `
    <div class="container">
      <div class=row>
        <div class="col-sm-8 col-md-8 mx-auto">
          <div class="title">
            <h3>${compleatData.name}</h3>
          </div>
          <div class=ranking>
          <p><i class="fas fa-star-half-alt"></i> ${compleatData.rating}</p>
          </div>
          <div class="contact">
            <p>Contacto: Email: ${compleatData.contact.email}, Telefono: ${compleatData.contact.phone}</p>
          </div>
          <div class="address">
            <p>DIrección: Calle: ${compleatData.contact.street}, ${compleatData.contact.city} ${compleatData.contact.state}</p>
          </div>
          <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#${compleatData.id}">
          Ubicacion
        </a>
      
          <div class="modal fade" id="${compleatData.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
               <div id="map"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 mx-auto">
          <div class="image">
            <img class="responsive-img" src="${compleatData.img}">
          </div>
      </div>
      </div>
    </div>


    
    `

  });


};