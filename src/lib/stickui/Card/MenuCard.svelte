<script lang="ts">
	import {TextLimit, Button} from "$lib";
	import DietaryIcon from "./DietaryIcon.svelte";

    type Props = {
        title: string;
        description?: string;
        price: number;
        img?: string;
        veg?: 'veg' | 'non-veg' ;
        func?: () => void;
    };

    let {title, description = '', price, img = '', veg = 'veg', func}: Props = $props();
</script>


<div class="flex w-full p-2 gap-2 sm:gap-4 items-center justify-between">
    <div class="flex flex-col gap-1">
        <DietaryIcon type={veg}/>

    <h2 class="text-xl font-medium text-foreground dark:text-foreground-dark">{title}</h2>
        <TextLimit text={description}/>
        <p class="font-medium"><span class="text-sm font-normal">₹</span>{price}</p>
    </div>
    <div class=" flex flex-col justify-center items-center relative">
        <div class="w-40 aspect-square bg-muted rounded-lg dark:bg-zinc-800 overflow-hidden"><img src={img} alt="food" class="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"></div>
        <Button extraClass="absolute z-10 top-[100%] -translate-y-[50%] shadow-md" scale={1.03} {func}>Add to Feast</Button>
    </div>
</div>