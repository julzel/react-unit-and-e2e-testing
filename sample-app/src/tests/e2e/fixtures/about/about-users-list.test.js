import { RequestMock, Selector, fixture } from "testcafe";
import getBaseUrl from "../../helpers/getBaseUrl";
import { mockUsersResponse } from "../../mocks/usersResponse";

// Define a fixture for testing the navigation to the About page:
fixture("Navigation to About Page")
  .page(getBaseUrl())
  .beforeEach(async (t) => {
    // Navigate to the About page before each test:
    await t.click('a[href="/about"]');
  });

// Define a fixture for testing the users list:
fixture("Users List")
  .page(getBaseUrl() + "/about")
  .requestHooks(
    // Create a mock for the request to the data/users.json endpoint:
    RequestMock()
      .onRequestTo("data/users.json")
      .respond(mockUsersResponse)
  );

// Define a test for checking if the About page is displayed:
test("About page is displayed", async (t) => {
  const pageTitle = Selector("h1").withText("About Us");
  await t.expect(pageTitle.exists).ok();
});

// Define a test for checking if the users list is displayed:
test("Users are displayed on the page", async (t) => {
  const usersList = Selector("ul");
  const listItem = usersList.find("li");

  await t.expect(usersList.exists).ok("Users list container not found");
  await t.expect(listItem.exists).ok("No users found in the list");

  const firstUser = listItem.withText("Alice");
  const secondUser = listItem.withText("Bob");

  await t.expect(firstUser.exists).ok("User 'Alice' not found");
  await t.expect(secondUser.exists).ok("User 'Bob' not found");
});
