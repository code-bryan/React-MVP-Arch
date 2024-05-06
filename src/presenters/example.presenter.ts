import ExampleModel from "../models/example.model";

export interface ExampleView {
  changeMessage?: (message: string) => void;
}

export class ExamplePresenter {
  private model: ExampleModel;

  constructor(private readonly view: ExampleView) {
    this.model = new ExampleModel(this);
  }

  trigger(): void {
    this.model.trigger();
  }

  changeMessage(message: string) {
    this.view.changeMessage?.(message);
  }
}