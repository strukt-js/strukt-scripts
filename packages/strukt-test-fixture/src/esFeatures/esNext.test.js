describe('Test ES Next Feature with Babel', () => {
  test('should allow write private, static and fields in class', () => {
    class Fixture {
      prop = 'prop';

      #privateProp = 'private prop';

      static staticProp = 'static prop';

      getPrivateProp() {
        return this.#privateProp;
      }
    }

    const fixture = new Fixture();

    expect(Fixture.staticProp).toBe('static prop');
    expect(fixture.prop).toBe('prop');
    expect(fixture.getPrivateProp()).toBe('private prop');
  });

  test('should allow write code with pipe operator', () => {
    const double = (n) => n * 2;
    const increment = (n) => n + 1;

    // without pipeline operator
    const withoutPipeOperator = double(increment(double(double(5))));

    // with pipeline operator
    const withinPipeOperator = 5 |> double |> double |> increment |> double;

    expect(withoutPipeOperator).toBe(42);
    expect(withinPipeOperator).toBe(42);
  });
});
