import { boot } from 'quasar/wrappers';
import VueNumber from 'vue-number-animation';

/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) =>
{
  // Set number animation instance on app
  app.use(VueNumber);
});
