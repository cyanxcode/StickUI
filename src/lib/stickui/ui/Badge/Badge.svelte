<script>
    let { string, color = 'blue',} = $props()
	const variants = {
        default: 'bg-zinc-100 text-zinc-600 border-zinc-500 dark:text-zinc-300 dark:bg-zinc-400/20 dark:border-zinc-200',
		red: 'bg-red-500/20 text-red-700 border-red-500 dark:text-red-700/70 dark:border-red-500/70',
		blue: 'bg-blue-500/20 text-blue-700 border-blue-500 dark:text-blue-700/70 dark:border-blue-500/70',
		green: 'bg-green-500/20 text-green-700 border-green-500 dark:text-green-700/70 dark:border-green-500/70',
		yellow: 'bg-yellow-500/20 text-yellow-700 border-yellow-500 dark:text-yellow-700/70 dark:border-yellow-500/70',
        purple: 'bg-purple-500/20 text-purple-700 border-purple-500 dark:text-purple-700/70 dark:border-purple-500/70',
	};

	let colorClass = variants[color] || variants.default;
</script>

<span class={`${colorClass} cursor-pointer border-1  rounded-full px-2 py-1 text-xs font-semibold w-auto`}>
    {string}
</span>