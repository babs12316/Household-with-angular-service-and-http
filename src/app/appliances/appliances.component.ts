import { Component, OnInit } from '@angular/core';
import { HouseholdService } from '../household.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  jsondata: any;
  public constructor(private householdService: HouseholdService) {
     householdService.getFormSchema().subscribe((results: any) => {
      this.jsondata = results;
    });

  }

  ngOnInit() {
  }

}
