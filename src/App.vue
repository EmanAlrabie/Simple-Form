<template>
    <div class="app">
        <div class="content">
            <router-link to="/" exact> </router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    background-color: #191531;
    width: 100vw;
    height: 100vh;
}

</style>
