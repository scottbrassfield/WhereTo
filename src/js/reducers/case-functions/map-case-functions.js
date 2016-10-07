export const mapSearch = (state = [], action) => {
  let service = new google.maps.places.PlacesService(map);
  service.textSearch(action.destination, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      return results;
    }
  })
}
