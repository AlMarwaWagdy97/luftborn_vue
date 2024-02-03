<template>
  <div class="login">
    <div class="col-md-6 offset-md-3">
      <h2 class="display-4 text-center mt-5">Register Form</h2>
     <div  v-if="message" class="alert alert-success alert-dismissible fade show text-center" role="alert">
          {{ message }}
        </div>
        <div  v-if="error_message" class="alert alert-danger alert-dismissible fade show text-center" role="alert">
          {{ error_message }}
        </div>
      <form @submit.prevent="preFormRegister">
             <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="name" name="name" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" name="email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" v-model="confirm_password" name="confirm_password " class="form-control" required>
        </div>
        <div class="form-group" style="color:red" v-if=error> {{error}}</div>
         <div class="form-group mt-3">
            <button type="submit" class="btn btn-info form-control"> Register </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>

export default {
   name: "Register-page",
   data() {
       return {
           name: '',
           email: '',
           password: '',
           confirm_password: '',
           error: '',
           message: '',
           error_message: '',
       }
   },
   methods: {
       preFormRegister(){
         this.message = "";
         this.error_message = "";

        this.$store.dispatch('preFormRegisterAction',{
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        })
        .then( res => {
          if(res.data.error != null){
            this.error = res.data.msg;
          }
          else{
            this.message = "Register successfully :)";
            this.$router.push({ name: 'Login' })
          }

        })
        .catch(err => {
            console.log(err);
          this.error_message = "There Was Error During Register :(";
        })
        
        console.log("regster");
      }
    }
};
</script>
