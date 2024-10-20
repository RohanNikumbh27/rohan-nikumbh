export function clickOutside(node) {
	window.addEventListener('click', handleClick);

	function handleClick(e) {
		if (!node.contains(e.target)) {
			node.dispatchEvent(new CustomEvent('outsideclick'));
		}
	}

	return {
		destroy() {
			window.removeEventListener('click', handleClick);
		}
	};
}