<script lang="ts">
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'
  
    let {type = 'single', children} = $props();

    const open = writable(type === 'single' ? null : new Set())
  
    function isOpen(value: any) {
        const current = $open;
        return type === 'single' ? current === value : current?.has(value)
    }
  
    function toggle(value: any) {
        open.update(current =>
            type === 'single'
                ? (current === value ? null : value)
                : (() => {
                    const newSet = new Set(current)
                    newSet.has(value) ? newSet.delete(value) : newSet.add(value)
                    return newSet
            })()
        )
    }
  
    setContext('accordion', { isOpen, toggle })
  </script>
  
  <div class="w-full rounded-md divide-y divide-muted dark:divide-primary-foreground-dark">
    {@render children()}
  </div>