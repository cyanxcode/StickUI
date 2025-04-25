<script lang="ts">
    //imports 
    import { cva } from 'class-variance-authority';
    //types
    type Props = {
        children: () =>  any;
        func?: () => void;
        loader?: () => any;
        variant?: 'default' | 'secondary' | 'outline' | 'link' | null;
        size?: 'md' | 'sm' | 'lg' | null;
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        loading?: boolean;
        scale?: number;
        extraClass?: string;
    }
    // props
	let {
		children,
		func,
		variant: variants,
    size: sizes,
		type = 'button',
		disabled: isDisabled = false,
		loading = false,
    scale = 1,
		extraClass = '',
    loader,
    }: Props = $props();

    // classes
    let button = cva(`px-4 py-2 rounded-md bg-background dark:bg-background-dark shadow hover:scale-[${scale}] active:scale[0.95] transition-all duration-100 ease-in-out no-wrap`,
    {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground dark:text-primary-foreground-dark shadow hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90",
        secondary:
          "bg-secondary text-secondary-foreground dark:text-secondary-foreground-dark shadow hover:bg-secondary/90 dark:bg-secondary-dark dark:hover:bg-secondary-dark/90",
        outline:
          "text-foreground dark:text-foreground-dark border border-border dark:border-border-dark",
        link: "underline-offset-4 hover:underline text-foreground dark:text-foreground-dark shadow-none",
        },
      size: {
        md: "px-4 py-2",
        sm: "px-3 text-xs py-1",
        lg: "px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
    )

</script>

<button data-ripple-light="true" class={`${button({ variant: variants, size: sizes })} ${extraClass}`} onclick={func} type={type} aria-busy={loading} aria-disabled={isDisabled || loading} disabled={isDisabled || loading}>
    {#if loading}
        {#if loader}
          {@render loader()}
        {:else}
          Loading...
        {/if}
        
    {:else}
        {@render children()}
    {/if}
    
</button>
