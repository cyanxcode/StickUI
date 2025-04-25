<script lang="ts">
    let checked = $state(false);
</script>

<button role="switch" aria-checked={checked} onclick={() => checked = !checked} data-active={checked} aria-label="switch" class="w-10 h-5 rounded-full flex items-center p-1 data-[active]:bg-primary data-[active]:justify-end data-[active]:dark:bg-primary-dark data-[active=false]:bg-muted data-[active=false]:justify-start data-[active=false]:dark:bg-muted-dark transition-all duration-300 ease-initial">
    <div class="w-4 h-4 rounded-full bg-primary-foreground dark:bg-primary-foreground-dark"></div>
</button>