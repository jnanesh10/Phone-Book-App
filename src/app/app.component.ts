import { Component, HostListener } from '@angular/core';
import { ContactService } from './contact.service';
// import { Contact } from './Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    contacts
    search:string=""
    isClicked:boolean
    fname:string
    lname:string
    pnumber:number
  constructor(private contact:ContactService){
    this.contacts=contact.getContacts()
  }

  ngOnInit():void{
   
  }
  
  // contact:Contact[]=[];

  addContact() {
    let  newContact={"firstName":this.fname,"lastName":this.lname,"phoneNumber":this.pnumber}
    console.log(newContact)
     this.contacts.push(newContact);
     console.log(this.contacts)
     this.isClicked=false
  }

  
  deleteContact(contact){
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  clicked(){
    this.isClicked=!this.isClicked
  }
}
