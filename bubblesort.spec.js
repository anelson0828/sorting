describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts and array', function() {
    expect(bubbleSort([4, 6, 9, 6, 2])).toEqual([2, 4, 6, 6, 9]);
  });
  it('sorts another array', function() {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });
});
