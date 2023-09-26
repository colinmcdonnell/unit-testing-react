import { render } from "@testing-library/react";
import MainLayout from "./MainLayout";

describe("<MainLayout />", () => {
  it("should render", () => {
    const { container } = render(<MainLayout />);

    expect(container).toMatchSnapshot();
  });
});
