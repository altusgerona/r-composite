export default (el) => {
  if (
    typeof el === 'object' &&
    el.props &&
    el.props.children
  ) {
    return el.props.children;
  }
  return null;
};
