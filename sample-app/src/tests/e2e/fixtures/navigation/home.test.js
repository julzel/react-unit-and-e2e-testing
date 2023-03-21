import { Selector, fixture } from 'testcafe';
import getBaseUrl from '../../helpers/getBaseUrl';

fixture('Home page').page(getBaseUrl());

test('User can navigate to the About page', async (t) => {
  await t.click(Selector('a').withText('About'));

  const pageTitle = Selector('h1').withText('About Us');
  await t.expect(pageTitle.exists).ok();
});

test('User can navigate to the Contact page', async (t) => {
  await t.click(Selector('a').withText('Contact'));

  const pageTitle = Selector('h1').withText('Contact Us');
  await t.expect(pageTitle.exists).ok();
});
