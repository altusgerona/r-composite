import { createApp } from 'mantra-core';
import { initContext } from './configs/context';
import main from './modules/main';

const context = initContext();
const app = createApp(context);

app.loadModule(main);

app.init();
context.page();
