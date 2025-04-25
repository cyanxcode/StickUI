<script lang="ts">
    type Props = {
        extraClass?: string;
    };
    let {extraClass}: Props = $props();
</script>

<div class={`${extraClass} rounded-md animate-pulse bg-primary/10 dark:bg-primary-dark/10`}></div>