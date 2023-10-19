import axios from 'axios';
import DataFetch from './DataFetch'; // Replace with the actual path to your DataFetch module

// Mocking axios for testing purposes
jest.mock('axios');

describe('DataFetch', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls after each test
  });

  it('fetches data for "all" site and "all" item', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked data' });

    const data = await DataFetch('all', 'all');

    expect(data).toBe('Mocked data');
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/all`);
  });

  it('fetches data for a specific site and "all" item', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked data' });

    const data = await DataFetch('example-site', 'all');

    expect(data).toBe('Mocked data');
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/example-site`);
  });

  it('fetches data for a specific item and "all" site', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked data' });

    const data = await DataFetch('all', 'example-item');

    expect(data).toBe('Mocked data');
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/item/example-item`);
  });

  it('fetches data for a specific site and item', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked data' });

    const data = await DataFetch('example-site', 'example-item');

    expect(data).toBe('Mocked data');
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/example-item/example-site`);
  });

  it('handles axios error by returning null', async () => {
    axios.get.mockRejectedValue(new Error('Axios error'));

    const data = await DataFetch('example-site', 'example-item');

    expect(data).toBe(null);
    expect(console.error).toHaveBeenCalledWith('Error fetching data:', expect.any(Error));
  });
});
