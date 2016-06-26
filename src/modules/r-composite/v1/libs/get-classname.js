export default (el) => {
  if (
    typeof el === 'object' &&
    el.props &&
    el.props.className
  ) {
    return el.props.className;
  }
  return null;
};
