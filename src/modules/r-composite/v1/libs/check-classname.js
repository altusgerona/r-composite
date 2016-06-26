export default (elClassName, className) => {
  if (elClassName) {
    let classNames = '';
    if (typeof elClassName === 'string') {
      classNames = elClassName;
    } else if (typeof elClassName === 'object') {
      if (
        elClassName.props &&
        elClassName.props.className &&
        typeof elClassName.props.className === 'string'
      ) {
        classNames = elClassName.props.className;
      } else if (
        elClassName.className &&
        typeof elClassName.className === 'string'
      ) {
        classNames = elClassName.className;
      }
    }
    return classNames.trim().split(' ').indexOf(className) >= 0;
  }
  return false;
};
