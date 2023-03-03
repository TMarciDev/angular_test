import { ResultsComponent } from './results/results.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: SearchComponent },
  { path: "results", pathMatch: "full", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
