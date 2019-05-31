import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'editor', component: EditorComponent },
    { path: '', pathMatch: 'full', redirectTo: '/editor' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
