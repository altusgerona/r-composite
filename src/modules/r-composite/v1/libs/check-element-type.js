export default (el, type) => {
  return el && typeof el === 'object' && el.type === type;
};
