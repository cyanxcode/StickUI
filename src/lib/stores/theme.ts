import { writable } from 'svelte/store';

export const theme = writable('light');
if (typeof window !== 'undefined') {
	theme.set(localStorage.getItem('theme') || 'light');
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		console.log(value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}

export function toggleTheme() {
	theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}