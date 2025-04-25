<script>
    import { getContext } from 'svelte';
	import Seperator from '../Seperator/Seperator.svelte';
    let { children } = $props();
    const id = getContext('item');
    const { toggle } = getContext('accordion');
  </script>
  
  <button
    onclick={() => toggle(id)}
    class="w-full text-left font-medium cursor-pointer"
  >
    <div class="flex justify-between">
        {@render children()}
        <p class="text-2xl font-semibold">+</p>
    </div>
  </button>