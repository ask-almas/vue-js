<template>
    <div>
        <div class="form-group">
            <label for="first">First Name</label>
            <input
                    type="text"
                    id="first"
                    class="form-control"
                    :value="firstName"
                    @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="second">Second Name</label>
            <input
                    type="text"
                    id="second"
                    class="form-control"
                    :value="secondName"
                    @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(isFirst, event){
                let name = '';
                if(isFirst){
                    name = event.target.value + ' ' + this.secondName;
                }else{
                    name = this.firstName + event.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed: {
            firstName(){
                return this.value.split(" ")[0]
            },
            secondName(){
                return this.value.split(" ")[1]
            }
        }
    }
</script>