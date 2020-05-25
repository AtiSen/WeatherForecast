import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule, MatMenuModule, MatSidenavModule, MatAutocompleteModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Floor1Component } from './floor1/floor1.component';
import { Room1Component } from './floor1/room1/room1.component';
import { Room2Component } from './floor1/room2/room2.component';
import { SideBarComponentComponent} from './side-bar-component/side-bar-component.component';
import { ButtonEventComponent } from './side-bar-component/button-event/button-event.component';
//import { HeaderComponent } from './side-bar/side-bar.component';


export const route: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'floor1',
   component: Floor1Component,
   children: [
      { path: 'room1', component: Room1Component },
      { path: 'room2', component: Room2Component }
     ] 
    },
    //{ path: '', redirectTo: 'home', pathMatch: 'full'}
    //{ path: '**', redirectTo: 'home', pathMatch: 'full'},
    
   ];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Floor1Component,
    Room1Component,
    Room2Component,
    ButtonEventComponent,
    SideBarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})


export class AppModule { }

export const routes: ModuleWithProviders = RouterModule.forRoot(route);

platformBrowserDynamic().bootstrapModule(AppModule);


