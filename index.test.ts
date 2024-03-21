import { Unstructured } from "./index";

describe("unstructured-typescript-sdk", () => {
    it("initialize client", async () => {
        const unstructured = new Unstructured({
            apiKey: "API_KEY",
        });
    });
});
