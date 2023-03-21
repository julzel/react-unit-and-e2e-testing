// To test the fetchUsers function, you can use TestCafe's RequestMock
// to intercept and mock the HTTP request made by the function:
import { fixture, Selector, RequestMock } from "testcafe";


// Create a mock for the request to the data/users.json endpoint
// and provide the response you want to simulate:
const mockUsersResponse = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const usersRequestMock = RequestMock()
  .onRequestTo("data/users.json")
  .respond(mockUsersResponse, 200, { "Content-Type": "application/json" });


// Add the requestHooks function to the fixture to use the usersRequestMock:
fixture("Users List")
  .page("http://localhost:3000")
  .requestHooks(usersRequestMock);


// Check if the mock data is displayed on the page:
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
