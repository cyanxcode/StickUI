<script>
    let {text, limit = 60} = $props();
    let x = $state(text.lastIndexOf(' ', limit));
    let cutIndex = $derived(x == -1 ? limit : x);
    let firstText = $derived(text.slice(0, cutIndex));
    let lastText = $derived(text.slice(cutIndex));

    let isExpanded = $state(false);
    let toggle = () => {
        isExpanded = !isExpanded;
    };

</script>
{#if text.length > limit}
<p class="text-md text-muted-foreground dark:text-muted-foreground-dark">{firstText} {#if isExpanded }{lastText}{:else} <button onclick={toggle} class="font-medium">... more</button>{/if}</p>
{:else}
<p class="text-md text-muted-foreground dark:text-muted-foreground-dark">{text}</p>
{/if}