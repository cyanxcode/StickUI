<script lang="ts">
	import { Button} from "$lib";
	import DietaryIcon from "./DietaryIcon.svelte";

    type Props = {
        title: string;
        price: number;
        img?: string;
        veg?: 'veg' | 'non-veg' ;
        func?: () => void;
    };

    let {title, price, img = '', veg = 'veg', func}: Props = $props();
</script>

<div class="flex flex-col w-full">
    <div class="w-full aspect-square bg-muted rounded-2xl dark:bg-zinc-800 overflow-hidden">
        <img src={img} alt="food" class="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out" />
    </div>
    <div class="flex justify-between items-center mt-2 px-2">
        <DietaryIcon type={veg}/>
    </div>
    <h2 class="text-lg font-medium text-foreground dark:text-foreground-dark px-2">{title}</h2>
    <div class="flex justify-between items-end px-2">
        <p class="font-medium text-md"><span class="text-sm font-normal">₹</span>{price}</p>
        <Button size="sm" scale={1.03} {func}>Add</Button>
    </div>
</div>
