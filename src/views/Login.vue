<template>
  <div class="login">
    <div class="col-md-6 offset-md-3">
      <h2 class="display-4 text-center mt-5">Login Form</h2>
     <div  v-if="message" class="alert alert-success alert-dismissible fade show text-center" role="alert">
          {{ message }}
        </div>
        <div  v-if="error_message" class="alert alert-danger alert-dismissible fade show text-center" role="alert">
          {{ error_message }}
        </div>
      <form @submit.prevent="performLogin">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" class="form-control" required>
        </div>
        <div class="form-group" style="color:red" v-if=error> {{error}}</div>
         <div class="form-group mt-3">
            <button type="submit"  class="btn btn-info form-control"> Login </button>
        </div>
      </form>
      <!-- <circle-spin v-show="isloading"></circle-spin> -->
    </div>
  </div>
</template>

<script>

export default {
   name: "login-page",
    data() {
        return{
            email: '',
            password: '',
            error: '',
            message: '',
           error_message: '',
        }
    }, 
    methods:{
      performLogin(){
        this.message = "";
        this.error_message = "";

        this.$store.dispatch('performLoginAction',{
          email: this.email,
          password: this.password,
        })
        .then( res => {
          console.log("result " , res);
            this.message = "Login successfully :)";
            this.$router.push({ name: 'Profile' })
          })
        .catch(err => {
          this.error = "There Was Error During Loggin :(";
          console.log("Error " +err.message);
        })

      }
    }
};
</script>
