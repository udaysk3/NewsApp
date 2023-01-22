import { NewsService } from './services/news.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { delay,filter } from 'rxjs';
import { UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit{
  title = 'NewsApp';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

 public sources:any = []
 public selectedNewsChannel:string = ''
 public articles:any = []
 public clicked:boolean = false;

  constructor(private obs : BreakpointObserver, private router:Router, private NewsApi : NewsService)
  {


  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  this.obs.observe(['(max-width: 787px)']).pipe(delay(1)).subscribe((res)=>{
    if(res.matches){
      this.sidenav.mode = 'over'
      this.sidenav.close();
    }
    else{
      this.sidenav.mode = "side";
      this.sidenav.open();
    }
  });

  this.router.events.pipe(
    untilDestroyed(this),
    filter((e)=> e instanceof NavigationEnd)
  ).subscribe(()=>{
    if(this.sidenav.mode ==='over') this.sidenav.close();
  })



  }
  searchforarticle(source:any){
    console.log('came here')
    this.NewsApi.getArticlesByID(source.id).subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.articles = res.articles
      this.clicked = false;
      if(this.sidenav.mode ==='over') this.sidenav.close();
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.NewsApi.initSources().subscribe((res:any)=>{
      console.log(res);
         this.sources = res.sources
    });
    this.NewsApi.initarticles().subscribe((res:any)=>{
      console.log(res.articles)
      this.articles = res.articles
    })
   }

   clickedprimary(){
    this.clicked = true;
   }


  }



