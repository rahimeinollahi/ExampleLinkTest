<template>
    <div class="continer">
        <h3>gallery image</h3>
        <p>
            Lorem, ipsum dolor sit
            can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign. Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign. Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device. amet consectetur adipisicing elit. Deleniti, voluptatem voluptate quis molestias officia et facere neque atque, est facilis dolorum repellat omnis nihil dolor, iure doloribus. Officiis, cupiditate corporis!
        </p>
        <div class="row">
            <img class="col-sm-4" src="./1.jpg" alt="">
            <img class="col-sm-4" src="./2.jpg" alt="">
            <img class="col-sm-4" src="./3.jpg" alt="">
        </div>

        <div class="row">
            <img class="col-sm-4" src="./4.jpg" alt="">
            <img class="col-sm-4" src="./5.jpg" alt="">
            <img class="col-sm-4" src="./6.jpg" alt="">
        </div>
        <div class="row">
            <img class="col-sm-4" src="./7.jpg" alt="">
            <img class="col-sm-4" src="./8.jpg" alt="">
            <img class="col-sm-4" src="./9.jpg" alt="">
        </div>
    </div>
</template>

<script>
// import {mapState} from 'vuex';
    export default {
        name:'JsHomeCtns',
        // computed:mapState(['photojs']),
        data(){
            return{
                jsPhoto:[
                    {id:1,url:'./1.jpg',alt:'alt image one'},
                    {id:2,url:'./1.jpg',alt:'alt image one'},
                    {id:3,url:'./1.jpg',alt:'alt image one'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
*{
    // align-items: center;
    text-align: center;
    // margin: 2px;
}
// img{
//     width:30%;
// }
h3{
    text-shadow: 5px 5px 15px red,
    3px 3px 20px blue;
}
p{
    text-align: left;
    margin: 5px;
    text-indent: 25px;
}
</style>