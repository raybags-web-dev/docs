const getViewportOffset = (element) => {
  let $window = $(window),
    scrollLeft = $window.scrollLeft(),
    scrollTop = $window.scrollTop(),
    offset = element.offset(),
    rect1 = {
      x1: scrollLeft,
      y1: scrollTop,
      x2: scrollLeft + $window.width(),
      y2: scrollTop + $window.height(),
    },
    rect2 = {
      x1: offset.left,
      y1: offset.top,
      x2: offset.left + element.width(),
      y2: offset.top + element.height(),
    };

  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop,
    insideViewport:
      rect1.x1 < rect2.x2 &&
      rect1.x2 > rect2.x1 &&
      rect1.y1 < rect2.y2 &&
      rect1.y2 > rect2.y1,
  };
};

// =========detect elemnets in DOM=======
const handleNav = (nav__element) => {
  const viewportOffset = getViewportOffset(nav__element);
};

export { handleNav};
