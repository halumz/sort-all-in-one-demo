import React, { Component } from 'react';
import Sorting from 'sort-all-in-one';
import { people } from 'DummyDataLarge.js';
class Router extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  	const arraySize =[1000,2000,3000];
  	const algos =["bubble","selection","insertion","quick","merge"];
  	const keys =["Name","Age"];//,"DOB"];
  	const types =["str","num","date"];
  	let res =[];
  	let index = 0;
  	for (var i = 0; i < arraySize.length; i++) {
  		let array = people.slice(0, arraySize[i]);
  		for (var j = 0; j < algos.length; j++) {
  			let algo= algos[j];
  			for (var k = 0; k < keys.length; k++) {
	  			let date =false;
			    if(k==2){
			      date=true;			 			    	
			    }
	  			let opts = {
			      algo, 
			      array,
			      key: keys[k],
			      orderBy: 'asc',
			      date		
			    };
			    const mysort = new Sorting();
			    let startTime = new Date().getTime();
			    let sortArray=mysort.sort(opts);
			    let result ={
				    index:index++,
			    	algo: algos[j],
			    	size:arraySize[i],
			    	key:types[k],
			    	moves: mysort.compareCount(),
			    	elapsedTime:(new Date().getTime()-startTime),
			    };
			    console.log(index);
  		}
  		
  	}
  }
  	console.log(res);
    return (<div>
      yo, start from here!
    </div>);
  }
}

export default Router;
