<template>
<div>
<H1>Reusable Custom Components</H1>
<btncomponent /><br/><br/>
<btncomponent /><br/><br/>
<btncomponent /><br/><br/>
<btncomponent /><br/><br/>
<p>Each is a Reusable Custom Component</p>



</div>
  
</template>

<script>
import btncomponent from './btncomponent'

export default {
    name: 'reusableComponents',
    components: {
        btncomponent,
    }
}
</script>

<style>

</style>