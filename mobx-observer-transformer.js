module.exports = function transform(el, context) {
  let observer = el.getAttribute('mobx-observer');
  if (!observer) return
  el.removeAttribute('mobx-observer');
  el.wrapWith(context.createNodeForEl('mobx-observer', {hint:observer.value}));
}
