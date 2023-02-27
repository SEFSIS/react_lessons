import axios from "axios";

const axiosService =axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

export {
    axiosService
}
// Експорт потрібен для того, щоб ми могли імпортувати його в іншому файлі