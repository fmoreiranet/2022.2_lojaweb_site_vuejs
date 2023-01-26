<script>

export default {
    data() { },
    methods: {
        show: function () {
            let load = document.querySelector("#loading");
            load.classList.add("visually-hidden");
        },
        hide: function () {
            let load = document.querySelector("#loading");
            load.classList.remove("visually-hidden");
        }
    }
}
</script>

<template>
    <div class="visually-hidden" id="loading">
        <span class="">Loading...</span>
        <div class="spinner-border hide" role="status">
        </div>
    </div>
</template>

<style>

</style>