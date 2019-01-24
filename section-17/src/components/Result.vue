<template>
    <div>
        <p>Number of clicks {{stringCounter}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as types from '../store/types'
    export default {
        computed: {
            ...mapGetters({
                'stringCounter': [types.CLICK_COUNTER]
            })
        }
    }
</script>