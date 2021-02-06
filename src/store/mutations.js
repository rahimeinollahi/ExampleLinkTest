function changeShowContent(state){
        state.leftsideitems.showcontent=!state.leftsideitems.changeShowContent;
    }
    function addItems(state,payload){
         state.tableItem.unshift(payload);
        //  state.tableItem.name.push(payload.name);
        //  state.tableItem.age.push(payload.age);
        //  state.tableItem.city.push(payload.city);
    }
    function addplus(state){
        state.count++;
    }
export default {
    changeShowContent,addItems,addplus
}