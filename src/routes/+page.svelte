<script>
    import { Accordian, AccordianItem, Trigger, Content, Button, MenuCard } from "$lib";
	import FoodCard from "$lib/stickui/Card/FoodCard.svelte";
	import { Badge } from "$lib/stickui/ui/Badge";
	import { Drawer, openDrawer } from "$lib/stickui/ui/Drawer";
	import Input from "$lib/stickui/ui/Input/Input.svelte";
	import Skeleton from "$lib/stickui/ui/Skeleton/Skeleton.svelte";
	import { Switch } from "$lib/stickui/ui/Switch";
	import { toggleTheme } from "$lib/stores/theme";
</script>

<main class="w-full min-h-screen bg-background dark:bg-background-dark p-4 text-foreground dark:text-foreground-dark">
    <h1 class="dark:text-foreground-dark text-foreground">Welcome to SvelteKit</h1>
    <Switch />
    <Button func={toggleTheme}>
        Hello World!
    </Button>
    <Button func={() => openDrawer()} >
        Open
    </Button>
    <Badge string="Hello World" color="default" />
    <Badge string="Pizza" color="red" />
    <Badge string="Burger" color="green" />

    <Input type="text" placeholder="Enter your name" value="" id="name" />

    <Accordian type="multiple">
        <AccordianItem>
            <Trigger>
                <h1 class="text-2xl">Pizza</h1>
            </Trigger>
            <Content>
                <div class="grid gap-10 grid-cols-1 md:grid-cols-2">
                    <MenuCard title="Margherita Pizza" img="https://picsum.photos/400/300" description="Italian style pizza with mozarella cheese and garnished with basil" price={250}/>
                    <MenuCard title="Chicken Pizza" img="https://picsum.photos/200" description="Italian style pizza with mozarella cheese and garnished with basil" price={250} veg="non-veg"/>
                    <MenuCard title="Veg Oveloaded Pizza" img="https://picsum.photos/300" description="Italian style pizza with mozarella cheese and garnished with basil" price={250}/>
                    <MenuCard title="Margherita Pizza" img="https://picsum.photos/400" description="Italian style pizza with mozarella cheese and garnished with basil" price={250}/>
                </div>
            </Content>
        </AccordianItem>
        <AccordianItem>
            <Trigger>
                <h1 class="text-2xl">Sides</h1>
            </Trigger>
            <Content>
                <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-2">

                    <FoodCard title="Margherita Pizza" price={250} img="https://picsum.photos/200" />
                    <FoodCard title="Chicken Pizza" price={450} img="https://picsum.photos/300" veg="non-veg"/>
                    </div>
            </Content>
        </AccordianItem>
    </Accordian>

    <Skeleton extraClass="w-full h-10" />
</main>
    <Drawer>Hello World</Drawer>