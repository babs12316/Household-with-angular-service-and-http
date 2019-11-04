import { Component, OnInit } from '@angular/core';
import { HouseholdService } from '../household.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  jsondata: any;
  public constructor(private householdService: HouseholdService) {

    householdService.getFormSchema().subscribe((results: any) => {
      this.jsondata = results;

      console.log(results);

    });

  }
  ngOnInit() {
  }

}
