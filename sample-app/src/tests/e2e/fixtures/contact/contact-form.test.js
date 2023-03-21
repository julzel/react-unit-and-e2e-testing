import { Selector, fixture } from 'testcafe';
import getBaseUrl from '../../helpers/getBaseUrl';

fixture('Navigation to Contact Page');

test('User can navigate to Contact page', async (t) => {
  const baseUrl = getBaseUrl();
  const contactUrl = `${baseUrl}/contact`;

  await t.navigateTo(contactUrl);

  const pageTitle = Selector('h1').withText('Contact Us');
  await t.expect(pageTitle.exists).ok();
});

test('User can fill out and submit Contact form', async (t) => {
  const baseUrl = getBaseUrl();
  const contactUrl = `${baseUrl}/contact`;

  await t.navigateTo(contactUrl);

  const nameInput = Selector('input[name="name"]');
  const emailInput = Selector('input[name="email"]');
  const messageTextarea = Selector('textarea[name="message"]');
  const submitButton = Selector('button[type="submit"]');

  await t
    .typeText(nameInput, 'John Smith')
    .typeText(emailInput, 'john@example.com')
    .typeText(messageTextarea, 'This is a test message.')
    .click(submitButton);

  const successMessage = Selector('.success-message');
  await t.expect(successMessage.exists).ok();
});
