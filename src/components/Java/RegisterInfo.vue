<template>
    <div id="person-info" class="continer">
        <form onsubmit="return false">
            <legend class="btn btn-dark col-sm-2">Person info</legend>
            <fieldset>
           <div class="row" v-for="item in personInfo" :key="item.id">
                <div class="col-sm-2">
                        <label class="btn btn-light col-sm-12 " for="fName">{{item.text}}</label> 
                </div>
                <div class="col-sm-9">
                         <input class="form-control" type="text" id="fName" name="fName"  :placeholder="item.placeHolder">
                </div>
         </div>
         <button @click="add()" class="col-sm-12 btn btn-info">Add (this info not work only test)</button>
       </fieldset>
        </form>
        <hr>
        <div class="tabel-responsive-sm">
            <table class="table table-hover table-light table-striped" >
                    <thead class="thead-dark" >
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <!-- <tbody>     -->
                          <transition-group name="list" tag="tbody">
                            <tr v-for="item in tableItem" :key="item.id">
                                <td>{{item.name}}</td>
                                <td>{{item.age}}</td>
                                <td>{{item.city}}</td>
                            </tr>
                        </transition-group>
                        <!-- </transition-group-table> -->
                    <!-- </tbody> -->
            </table>
        </div>
        
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
// import TransitionGroupTable from '../TransitionGroupTable.vue'
// import TransitionGroupTable from '../TransitionGroupTable.vue'
// import TransitionGroup from '../TransitionGropTable.vue'
    export default {
        name:'RegisterInfo',
        components:{
            // TransitionGropTable
                // TransitionGroupTable
                // TransitionGropTable
        },
        computed:mapState(['personInfo','tableItem','count']),
        data(){
            return{
                name:'',
                age:'',
                city:''
            }
        },
        methods:{
            ...mapActions(['addItems','addplus']),
            add(){
                    this.addItems({
                        id:1,
                        name:'mian',
                        age:20,
                        city:'zanjan'
                        })
                    
            }
        }
    }
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-50px);
//   transform: rotate(25deg);
//   background-color: red;
//   color: red;
//   font-size: 25px;
}
// transion group
hr{
    background-color: red;
    height: 0.5px;
}
.label-format{
    align-items: center;
    border: 1px solid red;
}

</style>