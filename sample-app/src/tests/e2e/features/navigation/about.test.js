import { Selector, fixture } from 'testcafe';
import getBaseUrl from '../../helpers/getBaseUrl';

fixture('About page').page(`${getBaseUrl()}/about`);

test('User can navigate to the Home page', async (t) => {
  await t.click(Selector('a').withText('Home'));

  const pageTitle = Selector('h1').withText('Welcome to our website!');
  await t.expect(pageTitle.exists).ok();
});

test('User can navigate to the Contact page', async (t) => {
  await t.click(Selector('a').withText('Contact'));

  const pageTitle = Selector('h1').withText('Contact Us');
  await t.expect(pageTitle.exists).ok();
});
