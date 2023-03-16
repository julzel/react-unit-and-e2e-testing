# Common fireEvents methods

- `fireEvent.click(element)`: Simulates a user clicking on an element.
- `fireEvent.change(input, { target: { value: 'new value' } })`: Simulates a user changing the value of an input element.
- `fireEvent.submit(form)`: Simulates a user submitting a form.
- `fireEvent.mouseOver(element)`: Simulates a mouse hover over an element.
- `fireEvent.mouseLeave(element)`: Simulates a mouse leaving an element.
- `fireEvent.keyDown(element, { key: 'Enter', keyCode: 13 })`: Simulates a user pressing a keyboard key on an element.
- `fireEvent.focus(element)`: Simulates a user focusing on an element.
- `fireEvent.blur(element)`: Simulates a user removing focus from an element.
- `fireEvent.selectOption(select, option)`: Simulates a user selecting an option from a dropdown element.

**Note**: this list is not exhaustive, and the most useful or common methods may vary depending on your specific use case. However, these methods should cover most common scenarios for simulating user interactions in your tests. [You can find more information here.](https://testing-library.com/docs/dom-testing-library/api-events/)