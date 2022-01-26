import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
  test('renders post if request succeeded', async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'first post'}]
    })
    render(<Async/>)
    const listItems = await screen.findAllByRole('listitem')
    expect(listItems).not.toHaveLength(0)
  });
});