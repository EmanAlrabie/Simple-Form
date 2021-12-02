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
            <div class="signup-div">
                You don't have account?
                <router-link to="/sign-up" tag="p" class="signup-link" exact>
                    Sing Up
                </router-link>
            </div>
            <router-view />
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

<style scoped>
.signin-page {
    height: 100vh;
    width: 40vw;
    background-color: white;
    float: left;
}

.signin-form {
    display: inline-block;
    vertical-align: middle;
}
h1 {
    float: left;
    color: #000000;
    margin-bottom: 5vh;
}
.mb-3 {
    width: 50vh;
}

.link-and-btn {
    position: relative;
    top: 3vh;
    display: inline;
}

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
.signup-div {
    margin-top: 13vh;
}
.signup-link {
    text-decoration: none;
}

@media screen and (max-width: 1047px) {
    .signin-page {
        width: 50vw;
    }
    .signin-form {
        width: 40vw;
    }
    .mb-3 {
        width: 40vw;
    }
    .link {
        float: left;
        left: 1vw;
        top: 0.5vh;
    }
    .btn-primary {
        width: inherit;
        height: inherit;
    }
}
@media screen and (max-width: 600px) {
    .signin-page {
        width: 100vw;
    }
    .signin-form {
        width: 90vw;
    }
    .mb-3 {
        width: 90vw;
    }
    .link {
        float: left;
        left: 1vw;
    }
    .btn-primary {
        width: inherit;
    }
}
</style>
