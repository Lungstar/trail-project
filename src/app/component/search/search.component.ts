import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  searchword: any;

  ngOnInit(): void {
  }

  searchThis() {
    this.searchcriteria.emit(this.searchword)
}

}
