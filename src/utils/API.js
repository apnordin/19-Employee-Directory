/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const URLnKEY = "https://randomuser.me/api/?key=8NK1-CZBL-C5CQ-YY49";

export default {
  search: function() {
      return axios.get(URLnKEY);
  }
};