import { writable } from "svelte/store";

export const toasts = writable([]);

export function showToast({ message, type = "info", duration = 3000 }) {
  const id = Date.now() + Math.random();
  toasts.update((all) => [...all, { id, message, type }]);
  if (duration > 0) {
    setTimeout(() => closeToast(id), duration);
  }
}

export function closeToast(id) {
  toasts.update((all) => all.filter((t) => t.id !== id));
}
