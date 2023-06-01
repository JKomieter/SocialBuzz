import SideBar from "../SideBar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


describe("SideBar", () => {
    it("renders, the sideBar items", () => {
        render(<SideBar/>)
    })
})