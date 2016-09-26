import { Component } from '@angular/core';

@Component({	
	selector:'head-bar',
	templateUrl:'build/pages/home/headbar.html',
	
})

export class headBar {
	
	constructor() {
		console.log(location.pathname)
	}
}