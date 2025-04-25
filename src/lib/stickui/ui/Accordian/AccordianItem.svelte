<script>
    import { setContext } from 'svelte'
    let { children } = $props()
    let id = crypto.randomUUID()
    setContext('item', id)
  </script>
  
  <div class="py-4 px-2">
    {@render children()}
  </div>