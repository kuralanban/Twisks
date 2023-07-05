import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WebcamModule } from 'ngx-webcam';
import { PostStoryComponent } from './home/stories/post-story/post-story.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './service/interceptor/api.interceptor';

@NgModule({
  declarations: [AppComponent, PostStoryComponent],
  entryComponents: [AppComponent],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ApiInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
  imports: [
    WebcamModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    SearchModule,
    NgbModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class AppModule {}
