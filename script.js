function $(selector, root = document) {
  return root.querySelector(selector);
}

function updateYear() {
  const el = $("[data-year]");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

updateYear();

