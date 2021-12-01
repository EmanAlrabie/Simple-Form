<template>
    <div class="signin-page">
        <form
            class="signin-form position-absolute top-50 start-10 translate-middle"
        >
            <h1>Sign in</h1>
            
            <div class="mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    v-model="email"
                    required
                />
            </div>
            <div class="mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="password"
                    v-model="password"
                    required
                />
            </div>
            <div class="link-and-btn">
                <router-link to="/reset-password" tag="p" class="link">
                    Forgot Password?
                </router-link>
                <button type="submit" class="btn btn-primary">PROCEED</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SigninForm",
    data() {
        return {
            email: "",
            password: "",
        };
    },
};
</script>

<style>
.signin-page {
    height: 100vh;
    width: 40vw;
    background-color: white;
    float: left;
}
h1 {
    float: left;
    color: #000000;
    margin-bottom: 5vh;
}
.signin-form {
    display: inline-block;
    grid-template-rows: auto auto auto auto;
    grid-gap: 500px;
    vertical-align: middle;
}
.mb-3 {
    width: 50vh;
}
input[placeholder],
[placeholder],
*[placeholder] {
    color: red !important;
}
.link-and-btn {
    display: inline;
}
/* input[type="email"]:focus {
    border: 3px solid #000000;
} */
.link {
    position: relative;
    color: #7b7988;
    text-decoration: none;
    top: 2vh;
    left: -2vw;
}
.btn-primary {
    display: inline;
    float: right;
    background-color: #191531 !important;
    border: none !important;
    width: 10vw;
    height: 7vh;
}
</style>
