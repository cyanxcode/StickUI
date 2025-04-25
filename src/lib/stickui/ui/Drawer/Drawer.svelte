<script lang="ts">
    import { closeDrawer, drawer } from "./";
    import { fade, fly } from 'svelte/transition';

	let startY = 0;

    let isDragging = false;
    let dragStartY = 0;

    function handleMouseDown(event: MouseEvent) {
    	isDragging = true;
    	dragStartY = event.clientY;
        document.body.style.userSelect = 'none';
    }

    function handleMouseMove(event: MouseEvent) {
    	if (!isDragging) return;
    	const deltaY = event.clientY - dragStartY;

    	if (deltaY > 50) {
    		isDragging = false;
    		closeDrawer();
    	}
        document.body.style.userSelect = ''; 
    }

function handleMouseUp() {
	isDragging = false;
}

	function handleSwipeStart(event: any) {
		startY = event.touches[0].clientY;
        document.body.style.userSelect = 'none';
	}
	function handleSwipeMove(event: any) {
		let deltaY = event.touches[0].clientY - startY;
		if (deltaY > 50) {
            closeDrawer();
		}document.body.style.userSelect = ''; 
	}
    function closeOnBackdrop(e: any) {
		if (e.target === e.currentTarget) {
            closeDrawer();
		}
    }

    let {children} = $props();

</script>
{#if $drawer}
<div in:fade={{duration: 400}} out:fade={{duration: 400}} class="fixed scale-[1.02] inset-0 z-10 bg-black/50 backdrop-blur-sm" onclick={closeOnBackdrop} role="button" tabindex="0" 
onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        closeOnBackdrop(e);
    }
}}>


<div
class="fixed flex flex-col items-center justify-center py-3 rounded-3xl z-20 h-[80vh] w-full bg-zinc-100 dark:bg-zinc-900 dark:text-white top-[30vh]"
in:fly={{ y: 400, duration: 400 }}
out:fly={{ y: 400, duration: 400 }}
ontouchstart={handleSwipeStart}
ontouchmove={handleSwipeMove}
onmousedown={handleMouseDown}
onmousemove={handleMouseMove}
onmouseup={handleMouseUp}

role="button"
tabindex="0"
onkeydown={(e) => {
    if (e.key !== 'Enter' && e.key !== ' ') {
        return;
    }
}}
>
<div class="w-32 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
<div class="p-4 h-full w-full">
    {@render children()}</div>
</div>

</div>
{/if}