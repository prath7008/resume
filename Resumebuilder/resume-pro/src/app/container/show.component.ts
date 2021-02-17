import { Component, Input, OnInit } from "@angular/core";
import { User } from "../models/user";
import { ApiService } from "../services/api-service";

@Component({

    selector: 'app-show',

    template: `
        <div class="container">
            <div class="overlay" >
                <h1 id="main_heading">Name: {{this.name}}</h1>
                <h1 ></h1>
                <h1 style="font-size: 1.5rem;margin: 0px 75px">Job Profile: {{this.jobprofile}}</h1>
                <div fxLayout="row">
                <h2 style="font-size: 0.8rem;margin: 5px 75px">Address: {{this.address}}</h2>
                <h2 style="font-size: 0.8rem;margin: 5px 175px">Email: {{this.email}}</h2>
                </div>
            </div>
            <hr>
            <p > Education: </p>
                <div class="education">
                    <h1 style="font-size:1.5rem;color:red">{{this.education}}</h1>
                </div>
            <hr>
            <p > Skills: </p>
                <div class="skills">
                    <button style="font-size:1.4rem;color:blue">{{this.skills}}</button>
                </div>
        <hr>
        </div>
        
     
  
    `,

    styles: [`
    *{
        margin: 0px 0px;
        font-size: 1.4rem;
        
    }
        .container{
            width: 100%;
            height: 100%;

        }
        .overlay{
            width:100%;
            height:30%;
            background-color: #f2f2f2;
            margin:15px;
        }
        #main_heading{
            margin: 0px 25px;
            padding:30px;
            font-size:2.5rem;
            font-style:bold;
     
        }
        p{
            margin: 0px 75px;
        }
        .education{
            widht:100%;
            height:30%;
            background-color: lightblue;
            border-radius: 8px;
            padding: 10px;
            margin: 3px 10px;
        }
        .skills{
            widht:100%;
            height:20%;
            background-color: lightpink;
            border-radius: 8px;
            padding:10px;
            margin: 3px 10px;
        }
    `]
})

export class ShowComponent implements OnInit {
    users: User[] = [];
    name: string | undefined;
    address: string | undefined;
    skills: String | undefined;
    email: String | undefined;
    education: String | undefined;
    jobprofile: String | undefined;

    constructor(private apiService: ApiService) {

    }
    ngOnInit() {
        this.fetchdata();

    }
    fetchdata() {
        this.apiService.getAllPost().subscribe(data => {
            this.users = data;
            console.log(data);
            console.log(data[0]);
            console.log(data[0].jobprofile);

            this.name = data[0].name;

            this.address = data[0].address;
            this.email = data[0].email;
            this.skills = data[0].skills;
            this.education = data[0].education;
            this.jobprofile = data[0].jobprofile;
        })
    }
}