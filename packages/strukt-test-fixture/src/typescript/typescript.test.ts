describe('Typescript Test', () => {
  test('should allow import other typescript files', async () => {
    const module = await import('./fnFixture');

    expect(module).not.toBeNull();
    expect(typeof module.fn).toBe('function');
  });
});
