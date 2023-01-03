import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {

  private hasView = false;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appCollapse(value: boolean) {
    if (value) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  private collapse() {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  private expand() {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }
}
