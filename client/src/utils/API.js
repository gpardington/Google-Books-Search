const { default: Axios } = require("axios");

export default {
    // put 3rd party API here
        postBook: function(bookData) {
            return axios.post("/api/books", bookData);
        },

        getWeather: function(){
            return Axios.get("https://openwaeather.org/aslkdfjhvpyhkjbnasdf")
        }
}

