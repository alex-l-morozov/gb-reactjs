import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
    it("matches snapshot", () => {
        const btn = render(<Button>{() => <button />}</Button>);

        expect(btn).toMatchSnapshot();
    });
});