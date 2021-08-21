class AirBnb {
    constructor() {
        this.API_URL = "http://workup-backend.herokuapp.com/airbnb"
    }

    getCategories() {
        return fetch(`${this.API_URL}/categories`);
    }
    
    getLocations(category, page) {
        return fetch(`${this.API_URL}?category=${category}&page=${page}&limit=20`);
    }
 
    getLocationDetails(id) {
        return fetch(`${this.API_URL}/id`);
    }

}