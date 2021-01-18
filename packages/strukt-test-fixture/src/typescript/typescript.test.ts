describe('Typescript Test', () => {
  test('should allow other typescript files', async () => {
    const { default: fn } = await import('./fnFixture');

    expect(fn).not.toBeNull();
    expect(typeof fn).toBe('function');
  });
});
