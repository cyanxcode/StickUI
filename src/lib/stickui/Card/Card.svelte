<script>
    let {children} = $props();    
</script>

<div class="border border-muted dark:muted-border-dark rounded-lg shadow-md p-4 bg-background dark:bg-background-dark m-2" >
    {@render children()}
</div>