import { resumeDescription } from "./resumeDescription";

test("Doesnt resume a short description", () => {
  const longDescription =
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.";
  const shortenedDescription =
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fa...";
  expect(resumeDescription(longDescription)).toBe(shortenedDescription);
});
