<template
        xmlns:v-local-highlight="http://www.w3.org/1999/xhtml"
        xmlns:v-highlight="http://www.w3.org/1999/xhtml">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!--<p v-text="'Some text'" v-highlight></p>-->
                <p v-text="'Highlight'" v-highlight="'red'"></p>
                <p v-text="'Highlight background'" v-highlight:background="'red'"></p>
                <p v-text="'Highlight background delayed'" v-highlight:background.delayed="'red'"></p>
                <p v-text="'Local highlight background delayed'" v-local-highlight:background.delayed="'red'"></p>
                <!--<p v-text="'Local hightlight background delayed blink'" v-local-highlight:background.delayed.blink="'red'"></p>-->
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: '500'}">
                    Local hightlight delayed blink passing object
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode){
                    // el.style.backgroundColor='green';
                    // el.style.backgroundColor=binding.value;
                    let delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }
                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(()=>{
                            setInterval(()=>{
                                currentColor==secondColor ? currentColor=mainColor : currentColor=secondColor;
                                if(binding.arg==='background'){
                                    el.style.backgroundColor=currentColor;
                                }else {
                                    el.style.color=currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    }else{
                        setTimeout(()=>{
                            if(binding.arg==='background'){
                                el.style.backgroundColor=binding.value;
                            }else {
                                el.style.color=binding.value;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
