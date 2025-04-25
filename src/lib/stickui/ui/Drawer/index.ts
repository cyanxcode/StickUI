
import { lockScroll, resetBodyScale, scaleDown, unlockScroll } from "$lib/utils/body";
import { writable } from "svelte/store";

export const drawer = writable(false);

export function openDrawer() {
	drawer.set(true);
    lockScroll();
    scaleDown();
}

export function closeDrawer() {
	drawer.set(false);
    unlockScroll();
    resetBodyScale();
}

export function toggleDrawer() {
	drawer.update((v) => !v);
}


export { default as Drawer } from './Drawer.svelte';
