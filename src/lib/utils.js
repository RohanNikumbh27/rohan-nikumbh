export function clickOutside(node) {
  window.addEventListener("click", handleClick);

  function handleClick(e) {
    if (!node.contains(e.target)) {
      node.dispatchEvent(new CustomEvent("outsideclick"));
    }
  }

  return {
    destroy() {
      window.removeEventListener("click", handleClick);
    },
  };
}

export function perspectiveTilt(node, { multiplier = 15, scale = 0.95} = {}) {
  // Set initial transition for smoothness
  node.style.transition = "transform 0.25s cubic-bezier(.25,.8,.25,1)";

  function handleMouseMove(e) {
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotationY = ((x - centerX) / centerX) * multiplier;
    const rotationX = -((y - centerY) / centerY) * multiplier; // Negative for "lean towards cursor"
    node.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`;
  }

  function handleMouseLeave() {
    node.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
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
