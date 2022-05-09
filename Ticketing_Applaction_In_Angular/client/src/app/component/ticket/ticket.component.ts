import { Component, OnInit,ViewChild,Optional } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../header/_services/auth.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketServiceService } from './_services/ticket-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Ticket } from './_class/ticket';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  displayedColumns: string[] = [ 'index','Uname','desc','CreatedDate','UpdateDate','DeleteDate','Edit','Delele'];
  dataSource = new MatTableDataSource<Ticket>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  email
  Date=new Date().toLocaleDateString("fr-FR");

  constructor(private authService: AuthService,
              private ticketServiceService:TicketServiceService,
              private dialog:MatDialog,
              private router:Router,
              @Optional() private dilogRef:MatDialogRef<AddTicketComponent>
              ) { 
    this.authService.isloggedin=true
    this.authService.user=JSON.parse(localStorage.getItem("user")||"{}")
    this.email=authService.user.email;
    this.getAllTicket();
  }

  ngOnInit(): void {this.getAllTicket();}
  getAllTicket(){
    this.ticketServiceService.getTickets().subscribe((res)=>{
      if(res){
        console.log(res)
      }else{
        console.log("errr")
      }
      this.dataSource=new MatTableDataSource<Ticket>(res as Ticket[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  }

  updateTicket(row:any){
    this.dialog.open(AddTicketComponent, {
      width:"30%",
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllTicket();
      }
    });


  }
  
  deletTicket(id:any){
    this.ticketServiceService.DelTicket(id,true,this.Date)
    .subscribe((res)=>{
      if(res){this.getAllTicket()}
      else{alert("Not Delete")}
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(AddTicketComponent, {
      width:"30%"
      
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllTicket();
      }
    });
    
  }

}
