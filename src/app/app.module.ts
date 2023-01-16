import { ListCommentsComponent } from './components/content/post/list-comments/list-comments.component';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';

// Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';

// Components
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetComponent } from './components/footer/widget/widget.component';
import { CopyrightComponent } from './components/footer/copyright/copyright.component';
import { CardPostComponent } from './components/content/card-post/card-post.component';
import { PostComponent } from './components/content/post/post.component';
import { LeaveCommentComponent } from './components/content/post/leave-comment/leave-comment.component';
export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

const firebaseConfig = {
  apiKey: "AIzaSyDdhVMvDLzPIljKJyVaVOGUuzCgdRdAGOI",
  authDomain: "ddr-blog-app-90f35.firebaseapp.com",
  projectId: "ddr-blog-app-90f35",
  storageBucket: "ddr-blog-app-90f35.appspot.com",
  messagingSenderId: "775614210394",
  appId: "1:775614210394:web:45c469b5df765a76e51363",
  measurementId: "G-M6TFYXY1JL"
};

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    WidgetComponent,
    CopyrightComponent,
    CardPostComponent,
    PostComponent,
    SanitizePipe,
    LeaveCommentComponent,
    ListCommentsComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
