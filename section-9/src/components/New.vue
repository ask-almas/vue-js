<template>
    <div>
        <h3>The New</h3>
        <button @click="counter++">Increase</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            };
        },
        destroyed() {
            console.log('Desctroyed');
        },
        activated() {
            console.log('Activated');
        },
        deactivated() {
            console.log('Deactivated');
        }
    }
</script>

<style>
</style>