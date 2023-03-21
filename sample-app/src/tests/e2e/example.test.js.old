import { Selector, fixture } from 'testcafe';

fixture('Example Page')
    .page('http://localhost:3000');

test('Page loads', async t => {
    await t
        .expect(Selector('h1').innerText).eql('Welcome to My App')
});
