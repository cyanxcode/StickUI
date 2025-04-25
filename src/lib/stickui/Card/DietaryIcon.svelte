<script lang="ts">
    type Props = {
        type: 'veg' | 'non-veg';
    };
    let {type = 'veg'}: Props = $props();

</script>
{#if type === 'veg'}
    <svg width="20" height="20" viewBox="0 0 20 20">
        <!-- Rounded green outlined square -->
        <rect x="1" y="1" width="18" height="18" rx="4" ry="4" fill="none" stroke="green" stroke-width="2"/>
        <!-- Green filled circle in center -->
        <circle cx="10" cy="10" r="4" fill="green"/>
    </svg>
{:else}
<svg width="20" height="20" viewBox="0 0 20 20">
    <!-- Rounded red outlined square -->
    <rect x="1" y="1" width="18" height="18" rx="4" ry="4" fill="none" stroke="red" stroke-width="2"/>
    <!-- Red filled triangle pointing up -->
    <polygon points="10,5 15,14 5,14" fill="red"/>
  </svg>
{/if}