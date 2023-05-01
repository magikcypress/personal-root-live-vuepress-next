<template>
    <div class="grid-item">
        <button type="button" v-on:click="gotosite()" class="action-button">Go to my staff<br /> 🚀</button>
    </div>
</template>
 
<script>
   export default {
     name: "GoPersonal Button",
     data() {
         return {
             producturl: "https://www.rouquin.me/"
         }
     },
     methods : {
         gotosite(){
             window.open(this.producturl);
         }
     }
 }
 </script>