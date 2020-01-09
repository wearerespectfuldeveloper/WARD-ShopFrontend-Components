<template>
<ul class="content-navigation"
    :style="{
        'width': width,
        'position': position.sticky,
        'top': position.top
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
    computed: {
        position () {
            return this.is_sticky ? {sticky: 'sticky', top: '0'} : {sticky: '', top: ''}
        }
    },
    mounted () {
        console.log(this.is_sticky);
        console.log(this.position);

    },
    props: {
        width: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => [
                { text: '티셔츠', link: 'https://www.naver.com' },
                { text: '아우터', link: '#' },
                { text: '스티커', link: '#' },
                { text: '악세사리', link: '#' },
            ]
        },
        is_sticky: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.content-navigation {
    border-top: 0.5px solid rgba($Dark, 0.75);
    border-bottom: 0.5px solid rgba($Dark, 0.75);
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