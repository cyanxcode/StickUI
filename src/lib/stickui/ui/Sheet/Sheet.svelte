<script lang="ts">
    import { closeSheet, isSheetOpen } from ".";
    import {fly} from "svelte/transition";
	import {Button} from "$lib/stickui/ui/Button";

    type Props = {
        allignement?: 'left' | 'right';
        children: any;
    };

    let {children, allignement = 'right'}: Props = $props();

</script>
{#if $isSheetOpen}
<aside transition:fly={{ x: allignement == 'right' ? 200 : -200 }} class={`h-[100vh] fixed w-96 bg-secondary dark:bg-secondary-dark top-0 ${ allignement == 'left' ? 'left-0' : 'right-0'} z-50 shadow-lg rounded-l-lg p-4 overflow-y-auto`}>
    
    {@render children()}
</aside>
{/if}