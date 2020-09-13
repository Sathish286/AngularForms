import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultQuestion='pet';
answer=''
genders=['Male','Female']
  @ViewChild('f') signUpForm:NgForm
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue(
      {
        userData:{
          username:suggestedName
        }
      }
    )
  }
  user ={
    username:'',
    email:'',
    secretquestion:'',
    answer :'',
    gender:''

  }
submitted=false;
  onSubmit(){
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.email=this.signUpForm.value.email;
    this.user.secretquestion=this.signUpForm.value.secret;
    this.user.answer=this.signUpForm.value.questionAnswer;
    this.user.gender=this.signUpForm.value.gender;
    this.signUpForm.reset();
  
  }

 


  
}
