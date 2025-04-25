<script lang="ts">
    type Props = {
        type?: string;
        placeholder?: string;
        value?: string;
        id?: string;
        extraClass?: string;
        disabled?: boolean;
    };
    let { type = "text", placeholder = "Placeholder", value = "", id = "", extraClass = "", disabled = false }: Props = $props();
</script>

<input {disabled} {type} {placeholder} bind:value {id} class="{extraClass} bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark border border-border dark:border-border-dark rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent dark:focus:border-transparent {disabled ? "cursor-not-allowed": ""}" />