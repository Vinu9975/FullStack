import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
import { Router } from '@angular/router';
import { Ticket } from '../_class/ticket';
import { AuthService } from '../../header/_services/auth.service';
import { TicketServiceService } from '../_services/ticket-service.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {
  model=new Ticket("","","","","","",false)
  date=new Date().toLocaleDateString("fr-FR");
  
  constructor(private auth:AuthService,
              public ticket:TicketServiceService,
              public router:Router,
              @Inject(MAT_DIALOG_DATA) public Data:any,
              private dialogRef:MatDialogRef<AddTicketComponent>
              ) {
    this.model.Uname=auth.user.firstname+" "+auth.user.lastname;
    this.model.Email=auth.user.email;
    this.model.CreatedDate=new Date().toLocaleDateString("fr-FR");
    
   }

  ngOnInit(): void {
    if(this.Data?._id){
      this.model.desc=this.Data.desc
    }
  }
 
 

  onSubmit(){
    if(this.Data?._id){
      this.Data.desc===this.model.desc?
        alert("Ticket Not Updated")
      :this.ticket.updateTicket(this.Data._id,this.model.desc,this.date).subscribe((res)=>{
        if(res){
          this.dialogRef.close('save')
        }
      })
        
    }
    else{
      if(this.model.desc===""){}
      else{
      this.ticket.addTicket(this.model)
      .subscribe((res)=>{
        if(res.ticket){
          this.dialogRef.close('save')
        }
        else{
          alert("Ticket Not Add")
        }
      });
      
      }
    }
  }

}
