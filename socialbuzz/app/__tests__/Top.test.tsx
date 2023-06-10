import Top from "@/app/components/modals/Top";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, RenderResult } from "@testing-library/react";


describe("Top", () => {
    it("should render the component", () => {
        render(<Top files={[]} handleSubmit={function (e: any): void {
            throw new Error("Function not implemented.");
        } } step={0} />);
    });
}); 

//write test for the modal
describe("Top", () => {
    it("should render the component", () => {
        render(<Top files={[]} handleSubmit={function (e: any): void {
            throw new Error("Function not implemented.");
        } } step={0} />);

        expect(screen.getByText("Create post")).toBeInTheDocument();
    })

});