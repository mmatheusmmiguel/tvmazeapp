import DetailsService from '.';

const withFetch = async () => {
  const res = await DetailsService.get('6771', [
    {name: 'embed', value: 'episodes'},
  ]);

  return res;
};

const unmockedFetch = global.fetch;

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('withFetch', () => {
  test('works', async () => {
    const object = await withFetch();
    expect(Object.keys(object).length).toBeGreaterThan(1);
  });
  test('The show has at least one episode', async () => {
    const object = await withFetch();
    expect(object._embedded.episodes).toBeTruthy();
    expect(object._embedded.episodes.length).toBeGreaterThan(0);
  });
});
