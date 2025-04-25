<script lang="ts">
    type Props = {
        orientation: 'horizontal' | 'vertical';
    };
    let { orientation = 'horizontal' } = $props();
</script>

{#if orientation === 'horizontal'}
    <div class="w-full h-[1px] bg-muted dark:bg-muted-dark" ></div>
{:else}
    <div class="w-[1px] h-full bg-muted dark:bg-muted-dark" ></div>
{/if}

