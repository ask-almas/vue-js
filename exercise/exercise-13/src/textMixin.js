export const textMixin = {
    data(){
        return {
            mixinText: 'some text'
        }
    },
    computed:{
        reverseTextMixin(){
            return this.mixinText.split("").reverse().join("");
        },
        countLengthMixin(){
            return this.mixinText + ' (' + this.mixinText.length + ')';
        }
    }
};