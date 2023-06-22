import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicService } from './servic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public backdata:any;
  public show:boolean=false;

  constructor(private api:ServicService){
  
  }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    
      this.api.get().subscribe((res:any)=>{
        this.backdata=res;
        if(this.backdata.length >=1){
          this.show=true;
        }
        else{
          this.show=false;
        }
      })
    
      return this.show


    }
  }
