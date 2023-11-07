const getStyle = require("./getStyle");

describe("getStyle", () => {
  it('should replace "%type%" and "%message%" in the style correctly', () => {
    const type = "feat";
    const message = "add new feature";
    const style = "%type%:%message%";

    const expectedOutput = "feat:add new feature";

    expect(getStyle(type, message, style)).toBe(expectedOutput);
  });

  it('should handle multiple "%type%" and "%message%" replacements in the style', () => {
    const type = "error";
    const message = "critical error";
    const style = "%type%:%message%, %type%:%message%";

    const expectedOutput = "error:critical error, error:critical error";

    expect(getStyle(type, message, style)).toBe(expectedOutput);
  });

  it('should handle an empty style string', () => {
    const type = "info";
    const message = "information";
    const style = "";

    const expectedOutput = "";

    expect(getStyle(type, message, style)).toBe(expectedOutput);
  });

  it('should handle "%type%" and "%message%" placeholders with no spaces', () => {
    const type = "warning";
    const message = "watch out!";
    const style = "%type%%message%";

    const expectedOutput = "warningwatch out!";

    expect(getStyle(type, message, style)).toBe(expectedOutput);
  });

  it('should handle special characters in "%type%" and "%message%"', () => {
    const type = "quote";
    const message = "this is a \"quote\"";
    const style = "%type%: '%message%'";

    const expectedOutput = "quote: 'this is a \"quote\"'";

    expect(getStyle(type, message, style)).toBe(expectedOutput);
  });
});
