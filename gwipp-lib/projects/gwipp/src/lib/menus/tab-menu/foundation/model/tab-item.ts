export class TabItem {
  id: number;
  title: string;
  selected: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.selected = false;
  }

  public toggle() {
    this.selected = !this.selected;
  }

  public setSelected(selected: boolean) {
    this.selected = selected;
  }
}
