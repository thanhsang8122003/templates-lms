import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DynamicModule } from 'ng-dynamic-component';
import { FirebaseService } from './core/service/firebase.service';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { ExportOutline, AppstoreAddOutline } from '@ant-design/icons-angular/icons';
import { SaveOutline } from '@ant-design/icons-angular/icons';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

=======

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
>>>>>>> 32b6172ec043f10a816d8788462145db4cab4675
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore 
    BrowserAnimationsModule,
    HttpClientModule,
    DynamicModule,
    NzIconModule.forRoot([ExportOutline, AppstoreAddOutline,SaveOutline]),
    NzPaginationModule,
    CoreModule,
  ],
  providers: [FirebaseService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
