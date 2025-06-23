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

export function perspectiveTilt(node, { multiplier = 10 } = {}) {
  let rotationX = 0;
  let rotationY = 0;

  function handleMouseMove(e) {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotationY = ((x - centerX) / centerX) * multiplier;
    rotationX = -((y - centerY) / centerY) * multiplier;
    node.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  }

  function handleMouseLeave() {
    rotationX = 0;
    rotationY = 0;
    node.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }

  node.addEventListener("mousemove", handleMouseMove);
  node.addEventListener("mouseleave", handleMouseLeave);

  return {
    destroy() {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    },
  };
}