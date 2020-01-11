export function offsetTop (elem) {
  Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
  };
  return elem.documentOffsetTop();
}
