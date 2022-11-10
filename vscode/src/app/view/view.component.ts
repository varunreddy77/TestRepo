import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import {MatSort} from '@angular/material/sort';
import{MatPaginator}from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns:string[]=['tid','firstname','lastname','age','gender','fplace','nodv'];

  users: User[]=[];
 
  dataSource=new MatTableDataSource(this.users);



  constructor(private registerService:RegisterService) { }

  @ViewChild(MatSort) sort=new  MatSort;


  ngOnInit(): void {
    this.getUser();
    console.log(this.users);
  }
    
  private getUser(){
    this.registerService.getUserList().subscribe(data=>{
      console.log(data);
      this.users=data;
      this.dataSource= new MatTableDataSource(this.users);
      this.dataSource.sort=this.sort;
    
     
    }
  
      )
  }

  
}

