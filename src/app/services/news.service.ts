import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) {

  }
  apikey = '0bfc65408eb54e06aca7bc2f231ea819'
  initSources(){
   return  this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apikey)
  }
  initarticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.apikey);
  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apikey);
  }
}
