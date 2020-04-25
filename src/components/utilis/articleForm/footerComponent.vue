<template>
<footer>
    <ul class="footer-container">
        <slot></slot>
    </ul>
</footer>
</template>
<script>
export default {
    name:"footerComponent",
    props:[
        "source"
    ]
}
</script>