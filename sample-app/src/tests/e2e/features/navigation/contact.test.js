import { Selector, fixture } from 'testcafe';
import getBaseUrl from '../../helpers/getBaseUrl';

fixture('Contact page').page(`${getBaseUrl()}/contact`);

test('User can navigate to the Home page', async (t) => {
  await t.click(Selector('a').withText('Home'));

  const pageTitle = Selector('h1').withText('Welcome to our website!');
  await t.expect(pageTitle.exists).ok();
});

test('User can navigate to the About page', async (t) => {
  await t.click(Selector('a').withText('About'));

  const pageTitle = Selector('h1').withText('About Us');
  await t.expect(pageTitle.exists).ok();
});
