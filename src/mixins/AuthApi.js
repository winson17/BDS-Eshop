
const url = "";
const headers = {
  "Content-Type": "application/json",
};
// APPELLE D'API STANDARD DE LOGIN PAR FETCH RETOURNE UN JSON
export default {
  data: function() {
    return {
      auth: localStorage.getItem("token") ? true : false,
    };
  },
  methods: {
    Login(email, password) {
      return fetch(url + "/auth/login", {
        method: "POST",
        headers,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then(function(res) {
        this.auth = true;
        return res.json();
      });
    },
    SignOut() {
      localStorage.clear();
      this.auth = false;
    },
    GetUserDetail(id) {
      fetch(url + "/users/" + id).then(function(res) {
        return res.json();
      });
    },
  },
};
