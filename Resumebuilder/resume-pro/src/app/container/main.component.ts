import { Component, Input, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../services/api-service";
import { User } from "../models/user";
@Component({

    selector: 'app-main',

    template: `
    <div class="container">

    <form action=""  (ngSubmit)="this.loginForm.valid && onLogin()"
    [formGroup]="this.loginForm">
        <h1 style="font-size:1.5rem ; text-align: center">Resume Form</h1>
        <p> Name:

            <input mat-Input type="text"  id="name"  formControlName="name"  placeholder="Enter your Name" >
            </p>

            <div *ngIf="this.loginForm.controls['name'].invalid && (this.loginForm.controls['name'].dirty || this.loginForm.controls['name'].touched)" class="alert">
           
                Please enter username
              </div>
        
          
           
            <p> Email:
            <input class="form-control" type="email"  required  id="email" formControlName="email" placeholder="Enter your Email" >
            </p>    
            <div *ngIf="loginForm.controls['email'].invalid && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)" class="alert">
           
            Please enter Email
          </div>
            
        <p>Job Profile:
        <input type="text" id="profile" formControlName="jobprofile" placeholder="Job Profile" required>
        </p>


            <p>
                Skills:
                <input type="text" id="skills" formControlName="skills" placeholder="Enter Skills" required>
            </p>
        
            <p>
            Address:
        
            <textarea placeholder="Enter Address" formControlName="address" name="address" id="address" required></textarea>
                  
            </p>

            <p>
            Education Qualification:
            <textarea placeholder="Enter Education Details" formControlName="education" id="education" required></textarea >
            </p>

            <button type="submit">Resume Form</button>


  
    </form>
    

</div>
  

    `,

    styles: [`
*{
    border-sizing: border-box;
}
body{
    margin: 15px 60px 15px 60px;
    font-size:1rem;
    padding:10px;
}

.container{
    
    background-color: #f2f2f2;
    padding: 5px 45px;
    border: 2px solid lightgray;
    border-radius: 5px;
}

input[type="text"],
input[type="email"],
textarea
{
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    border: 1px solid #ccc;
    margin:8px;
}


button{
    width:100%;
    color: red;
    padding:15px;

}
button:hover{
    background-color:black;
    color:white;
}
    `]
})

export class MainComponent implements OnInit {
    users: User[] = [];
    loginForm!: FormGroup;
    loading = false;

    constructor(private router: Router, private apiService: ApiService) {

    }
    ngOnInit() {

        this.loginForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            jobprofile: new FormControl('', [Validators.required]),
            skills: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            education: new FormControl('', [Validators.required]),
        });

    }

    onLogin() {
        console.log(this.loginForm.value);

        const request = this.apiService.signUp(this.loginForm.value);
        request.subscribe((data) => {




            this.router.navigate(['show'])

        }, (error) => {
            console.log(error);
        });



    }

}