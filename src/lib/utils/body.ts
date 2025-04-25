// lib/utils/scroll.ts
export function lockScroll() {
	document.body.style.overflow = 'hidden';
}
export function unlockScroll() {
	document.body.style.overflow = '';
}
export function scaleDown() {
    document.body.style.transform = 'scale(0.98)';
	document.body.style.transition = 'transform 0.3s ease';
	document.body.style.transformOrigin = 'top center';
}

export function resetBodyScale() {
	document.body.style.transform = 'scale(1)';
	document.body.style.transition = 'transform 0.5s ease';
	document.body.style.transition = 'top center';
}