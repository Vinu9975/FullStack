import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MemberService} from '../shared/member.service';
import{Member} from '../shared/member.model';

declare var Mes: any;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers:[MemberService]
})
export class MemberComponent implements OnInit {

  constructor(public memberService:MemberService) {
      this.memberService.selectedMember={
      _id:"",
      FirstName:"", 
      LastName:"", 
      ContactNo:"", 
      EmailId:"", 
      Password:"", 
      Gender:"", 
      Status:"" 
    }
   }

  ngOnInit(): void {
    this.resetForm();
    this.getMembersListData();
  }

  onSubmit(form:NgForm)
  {
    
   // form.value.Gender="Female";
   // form.value.Status="Y";

    if (form.value._id == "" || form.value._id==null ) {
      this.memberService.postMember(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getMembersListData();
      });
    }
    else {
      this.memberService.putMember(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getMembersListData();
      //Mes.toast({ html: 'Updated successfully', classes: 'rounded' });
    });

  }
}

  getMembersListData(){
    this.memberService.getMemberList().subscribe((res)=>{
      this.memberService.Members=res as Member[];
    });
  }

  resetForm(form?:NgForm){
    
    if(form)
    {
      form.reset();
      this.getMembersListData();
      
    }
    
    
  
  }

  onEdit(M: Member) {
    this.memberService.selectedMember = M;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.memberService.deleteMember(_id).subscribe((res) => {
        this.resetForm(form);
        this.getMembersListData(); 
        //Mes.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

  

}
