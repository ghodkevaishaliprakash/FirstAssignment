
import { NgIf } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges, Renderer2 } from '@angular/core';
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

  constructor(private renderer:Renderer2){}

  ngOnInit(): void {
    
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
    gender:new FormControl(''),
    skillName:new FormControl(''),
    skillExperience: new FormControl('')
    // skills:new FormArray([
    //   new FormGroup({
    //     skillName: new FormControl('', [Validators.required]),
    //     skillExperience: new FormControl('', [Validators.required])
    //   })])
  
  })
  addNewSkill()
  {
    
    // const div = this.renderer.createElement('div');
    // const input = this.renderer.createElement('input');

    // const divselect = this.renderer.createElement('div');
    // const selectexp = this.renderer.createElement('select');

    // this.renderer.appendChild(div, input);
    // this.renderer.appendChild(divselect, selectexp);

    // this.renderer.addClass(div, 'col-md-5');
    // this.renderer.addClass(div, 'col-sm-5');
    // this.renderer.addClass(div, 'col-xs-12');

    
    // this.renderer.addClass(input, 'form-control');
    // this.renderer.addClass(input, 'col-md-5');
    // this.renderer.addClass(input, 'col-xs-12');

    // this.renderer.addClass(divselect, 'col-md-5');
    // this.renderer.addClass(divselect, 'col-sm-5');
    // this.renderer.addClass(divselect, 'col-xs-12');

    
    // this.renderer.addClass(selectexp, 'form-control');
    // this.renderer.addClass(selectexp, 'col-md-5');
    // this.renderer.addClass(selectexp, 'col-xs-12');

    // const textboxes = document.getElementById('textboxes');
    // const dropdowns = document.getElementById('dropdowns');

    // this.renderer.appendChild(textboxes, div);
    // this.renderer.appendChild(dropdowns, divselect);
  }
  
  
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
    gender:'',  
    skillName:'',
    skillExperience:''
  };
  
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
  gender:'', 
  skillName:'',
  skillExperience:'', };
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
  skillName:'',
  skillExperience:'', 
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
debugger;
const record=this.EmployeeArr.find(m=>m.EmployeeId==this.Employee.EmployeeId)
record.name=this.Employee.name;
record.email=this.Employee.email;
record.contactNumber=this.Employee.contactNumber;
record.gender=this.Employee.gender;
record.skillName=this.Employee.skillName;
record.skillExperience=this.Employee.skillExperience;
this.onCloseModel();
localStorage.setItem('EmployeList',JSON.stringify(this.EmployeeArr));
  }



  }

 
  

 

   