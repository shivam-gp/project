import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {  MatTabsModule} from '@angular/material/tabs';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule} from '@angular/material/dialog'
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
 import {MatStepperModule} from '@angular/material/stepper';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { SideNaveComponent } from './side-nave/side-nave.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    SideNaveComponent,
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MatSliderModule,MatSidenavModule,MatIconModule,MatButtonModule,MatToolbarModule,MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,MatGridListModule,MatRippleModule,MatDividerModule,MatBadgeModule,
    MatDialogModule, MatProgressBarModule, MatSelectModule,MatDatepickerModule, MatNativeDateModule, MatMenuModule
     
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
