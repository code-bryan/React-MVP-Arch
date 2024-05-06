import { ExamplePresenter } from "../presenters/example.presenter";

export default class ExampleModel {
  constructor(private readonly presenter: ExamplePresenter) {}

  trigger() {
    const message = "new message";
    this.presenter.changeMessage(message);
  }
}