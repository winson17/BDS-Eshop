
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
      try {
        await axios.get(`wiwiLeBro`, {
          body:JSON.stringify({
            email: email,
            password: password,
          }),
        }).then(response => {
          localStorage.setItem("token",response.data.token)
          this.auth = true;
          return response.data 
        })
      } catch (e) {
        this.errors.push(e);
      }
    },
    SignOut() {
      localStorage.clear();
      this.auth = false;
    },
    GetUserDetail(id) {
      try {
        await axios.get(`wiwiLeBro`, {
          body:JSON.stringify({
           id:id
          }),
        }).then(response => {
          return response.data 
        })
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
