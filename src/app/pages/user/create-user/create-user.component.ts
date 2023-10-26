import { Component , OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


const emailCheck = (c : AbstractControl) : {[key : string] : boolean} | null =>{
  const email = c.get('email');
  const confirmEmail = c.get('confirmEmail');
  if(confirmEmail?.pristine) return null;
  
  if(email?.value != confirmEmail?.value) return {'match' : true}
  
  return null;
  
}

@Component({
  selector: 'app-register',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  customerForm! : FormGroup;
  showToast : boolean = false;
  constructor(private fb : FormBuilder , private userService : UserService){ }

  changeValidationsOnRadio(selectedOption : string){
    const phoneControl = this.customerForm.get('phone');
    if(selectedOption == 'text'){
      phoneControl?.setValidators(Validators.required);
    }else{
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity();
  }
  
  ngOnInit(): void {   
    this.customerForm =  this.fb.group({
      firstName : ["",[Validators.required , Validators.minLength(3)] ],
      lastName : ["",[Validators.required , Validators.maxLength(50)]],
      emailGroup : this.fb.group({
        email : ["",[Validators.required , Validators.email]],
        confirmEmail : ["",Validators.required]
      },{
        validator : emailCheck
      }),
      phone : [null],
      notification : [null,Validators.required]
    });

    this.customerForm.get('notification')?.valueChanges.subscribe(
      value => this.changeValidationsOnRadio(value)
    )
  }

  saveUser():void{
    const {firstName , lastName , notification , emailGroup , phone} = this.customerForm.value;
    const {email} = emailGroup;
    this.userService.users = {id : this.userService.users.length + 1,firstName , lastName , notification , email , phone};
    this.showToast = true;
    console.log(this.showToast);
    setTimeout(() => {
      this.showToast = false;
    },2000)
    this.customerForm.reset();
  }

}
