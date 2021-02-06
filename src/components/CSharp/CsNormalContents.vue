<template>
    <div>
       <div class="continer">
        <div class="row">
            <div v-for="item in csHomeNoraml" :key="item.id"  class="col-sm-12">
                <div id="item.section">
                    <h2>{{item.header}}</h2>
                     <p>{{item.content}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'CsBeginerContents',
        computed:mapState(['csHomeNoraml'])
    }
</script>

<style lang="scss" scoped>
h2{
    color: rgb(41, 211, 84);
    text-align: left;
    text-shadow: 5px 5px 10px red,
    2px 3px 8px blue;
    border-bottom: 1px solid #fcd1d1;
    margin-left: 20px;
}
p{
    text-indent: 50px;
    margin: 5px 10px;
    padding: 8px;
   
}

</style>