import { Component, OnInit } from '@angular/core';

export class AuditResponse{
  auditId:number;
  projectExecutionStatus:string;
  remedialActionDuration:string;
  constructor(id:number,projectExecutionStatus:string,remedialActionDuration:string)
  {
    this.auditId=id;
    this.projectExecutionStatus=projectExecutionStatus;
    this.remedialActionDuration=remedialActionDuration;
  }
}
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  auditResponse!:AuditResponse;
  projectStatus!:boolean;



  constructor() { }

  ngOnInit(): void {
   
    let obj:any=localStorage.getItem("AuditResponse");
    this.auditResponse=JSON.parse(obj);
    console.log(this.auditResponse);
    this.projectStatus=this.auditResponse.projectExecutionStatus=='GREEN';
  }

}
