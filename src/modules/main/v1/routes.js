import * as Components from './../../r-composite';
import root from './pages/root.jsx';

export default (injectDeps, context) => {
  const { Page } = Components;
  const PageCtx = injectDeps(Page);

  root(PageCtx, context, { Components });
};
