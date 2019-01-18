<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="clicked">Click</button>
                <hr>
                <div style="width: 100px; height: 100px; background-color: aquamarine"
                     v-myon:mouseenter="mouseEntered" v-myon:mouseleave="mouseLeave">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            myon:{
                bind(el, binding, vnode){
                    // el.onclick = function () {
                    //     binding.value();
                    // }
                    let type = binding.arg;
                    let fn = binding.value
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked(){
                alert('clicked');
            },
            mouseEntered(){
                console.log('Entered');
            },
            mouseLeave(){
                console.log('Left');
            }
        }
    }
</script>

<style>
</style>
