<template>
<ul class="page-navigation"
    :style="{
        'width': width
    }"
>
    <li class="navigation-item font--base-semibold"
        v-for="item in items"
        :key="item.text"
    >
        <a :href="item.link">{{item.text}}</a>
    </li>
</ul>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: [
                { text: '티셔츠', link: 'https://www.naver.com' },
                { text: '아우터', link: '#' },
                { text: '스티커', link: '#' },
                { text: '악세사리', link: '#' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.page-navigation {
    border-top: 0.5px solid $Dark;
    border-bottom: 0.5px solid $Dark;
    padding-top: 21px;
    padding-bottom: 21px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: $Light;

    .navigation-item {
        a {
            text-decoration: none;
            color: $Dark;
        }
    }
}




</style>