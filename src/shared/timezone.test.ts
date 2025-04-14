describe("timezone", () => {
  it("will run tests in UTC", () => {
    //* Arrange
    const date = new Date();

    //* Act
    const timzoneOffset = date.getTimezoneOffset();

    //* Assert
    expect(timzoneOffset).toBe(0);
  });
});
