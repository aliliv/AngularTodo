import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() { }
  private name="LİV";
  // items=[
  //   "Ali","Veli","Selami"
  // ];
  displayAll : boolean=true;
  items=[
    {description:"Breakfast",action:true},
    {description:"Gym",action:false},
    {description:"Study",action:false},
  ];
  addItem(value :string)
  {
    this.items.push({description:value,action:false});
  }
  getItems()
  {
    if(this.displayAll)
    {
      return this.items;
    }
    else{
      return this.items.filter(item=>item.action===false);
    }
  }
  getName()
  {
    return this.name;
  }
}
