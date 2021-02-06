function changeShowContent({commit}){
    commit('changeShowContent');
}
// function addItems({commit}){
//     commit('addItems',{
//         id:1,
//         name:'mian',
//         age:20,
//         city:'zanjan'
//     });
function addItems({commit},item){
    const itemdata=item;
    commit('addItems',itemdata);
}
function addplus({commit}){
    commit('addplus');
}
export default {
    changeShowContent ,addItems,addplus
}