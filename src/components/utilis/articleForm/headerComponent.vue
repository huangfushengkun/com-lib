<template functional>
    <header>
        <h2>{{props.source[0][0][0]}}</h2>
        <p>{{props.source[1][0][0]}}</p>
    </header>
</template>
<script>
export default {
    name:"headerComponent",
    props:[
        'source'
    ],
}
</script>