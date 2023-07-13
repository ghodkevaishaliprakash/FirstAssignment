
import { NgIf } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  ngOnInit(): void {
    debugger
    const localData=localStorage.getItem('EmployeList')
    if(localData!=null)
    {
      this.EmployeeArr=JSON.parse(localData);
    }
  }
   isUpdateVisible=true;
 isSaveVisible=true;

  LoginForm= new FormGroup({
    EmployeeId:new FormControl(''),
    name:new FormControl('null',Validators.required),
    contactNumber:new FormControl('',Validators.required),
    email:new FormControl('null',[Validators.required,Validators.email]),
    gender:new FormControl('')
  
  })
  
  
  LoginUser()
  {
    console.warn(this.LoginForm.value);
  }
  EmployeeArr:any[]=[];
  Employee:any={
    EmployeeId:'',
    name:'',
    contactNumber:'',
    email:'',
    gender:'',  };
  constructor(){}
  SaveData(data:any)
  { 
    
   debugger;
   this.Employee.EmployeeId=this.EmployeeArr.length + 1;
this.EmployeeArr.push(this.Employee);
this.onCloseModel();
localStorage.setItem('EmployeList',JSON.stringify(this.EmployeeArr));
this.Employee={
  EmployeeId:'',
  name:'',
  contactNumber:'',
  email:'',
  gender:'',  };
  }
  onCloseModel()
  {
    const notNull=document.getElementById('EmployeeModel');
    if (notNull !=null)
      {
        notNull.style.display='none';
      }
    
  }
  onAddEmployee()
  {
    this.isSaveVisible=true;
    this.isUpdateVisible=false;
    const notNull=document.getElementById('EmployeeModel');
    if (notNull !=null)
      {
        notNull.style.display='block';
      }
            this.Employee={
        EmployeeId:'',
  name:'',
  contactNumber:'',
  email:'',
  gender:'',  
};
  }
      
  
  onEdit(emp:any)
  {     
    this.isSaveVisible=false;
    this.isUpdateVisible=true;
    const notNull=document.getElementById('EmployeeModel');
    if (notNull !=null)
      {
        notNull.style.display='block';
      }
    this.Employee=emp;
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure you want to delete '))
    //this.EmployeeArr.splice(id);
    for(let i=0;i<this.EmployeeArr.length;i++){
if(this.EmployeeArr[i].EmployeeId == id)
{
 
  this.EmployeeArr.splice(i,1);
  alert("Record deleted Successfully ");
}

  }
  localStorage.setItem('EmployeList',JSON.stringify(this.EmployeeArr));
}

  onUpdate(data:any)
  {

const record=this.EmployeeArr.find(m=>m.EmployeeId==this.Employee.EmployeeId)
record.name=this.Employee.name;
record.email=this.Employee.email;
record.contactNumber=this.Employee.contactNumber;
record.gender=this.Employee.gender;
this.onCloseModel();
localStorage.setItem('EmployeList',JSON.stringify(this.EmployeeArr));
  }



  }

 
  

 

   