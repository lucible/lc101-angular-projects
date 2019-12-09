import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = 
      [{ title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Put dishes away', 'Do laundry'] }
      ,{ title: "Today's Chores", tasks: ['Clean out litter box', 'Pick up package', 'Vacuum floor'] }
      ,{ title: "Tomorrow's Chores", tasks: ['Do homework', 'Fill up dishwasher', 'Put gas in car'] }
      ]

   constructor() { }

   ngOnInit() {
   }

}
