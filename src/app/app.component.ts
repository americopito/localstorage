import { Component, OnInit ,Input} from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  name:any;
  t:any=false;
  ed:any;
  title = 'frontest';
  add:any={};
  list=[];
  list2=[];
  ngOnInit() {
    this.load()
    
 }
  

 load(){
  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    this.list2.push(key)
    console.log(this.list2);
  }
 }

   setValue() { 
   this.list2.push(this.add.name);
 
localStorage.setItem(this.add.name,'value' );

console.log(localStorage)
  }
  delete(x) { 
    localStorage.removeItem(x);
    var index = this.list2.indexOf(x);
    if (index > -1) {
      this.list2.splice(index, 1);
    }
   }
   edit(x) { 
    for(var i=0;i<this.list2.length;i++)
     {
        if(this.list2[i]==x)
        {
             
              this.t=true;
        }

      }
    }
    edit2(x,y) { 
      var bo=false;
      for(var i=0;i<this.list2.length;i++)
       {
          if(this.list2[i]==x)
          {
            if(localStorage.key(i)==x){localStorage.setItem(y,'value') ;localStorage.removeItem(x);}
            
               this.list2[i]=y;
               
               console.log(localStorage)

                this.t=false;
          }
  
        }
      }
   
}
