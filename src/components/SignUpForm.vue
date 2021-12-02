<template>
    <div class="signup-page">
        <router-link to="/" class="back-arrow" exact>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
            </svg>
            Back
        </router-link>
        <router-view />

        <form
            class="signup-form position-absolute top-50 start-10 translate-middle"
        >
            <h1>Sign up</h1>
            <div class="mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    v-model="firstName"
                    required
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    v-model="lastName"
                    required
                />
            </div>
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
            <div class="mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm"
                    v-model="confirm"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary">PROCEED</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUpForm",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm: "",
        };
    },
};
</script>

<style scoped>
.signup-page {
    height: 100vh;
    width: 40vw;
    background-color: white;
    float: left;
}
.back-arrow {
    color: black;
    position: relative;
    top: 5vh;
    left: -8vw;
    text-decoration: none;
}
.back-arrow :hover {
    opacity: 0.7;
}
.signup-form {
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

.btn-primary {
    background-color: #191531 !important;
    border: none !important;
    width: 10vw;
    height: 7vh;
    margin-top: 3vh;
}

@media screen and (max-width: 1047px) {
    .signup-page {
        width: 50vw;
    }
    .signup-form {
        width: 50vw;
    }
    .mb-3 {
        width: 40vw;
    }
    .btn-primary {
        width: 20vw;
        height: inherit;
        margin-left: -10vw;
    }
    .back-arrow {
    left: -15vw; 
    }
}

@media screen and (max-width: 600px) {
    .signup-page {
        width: 100vw;
    }
    .signup-form {
        width: 90vw;
    }
    .mb-3 {
        width: 70vw;
    }
    .btn-primary {
        width: 30vw;
        margin-left: -20vw;
    }
    .back-arrow {
    left: -30vw; 
    }
}
</style>
