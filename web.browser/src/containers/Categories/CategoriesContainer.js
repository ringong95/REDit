import React, { Component } from 'react';
import Week from './../../components/Week'
import Categories from './Categories'

import { data } from './../../mock-data'



class CategoriesContainer extends Component { 
  constructor(){
    super()
    this.state = {
      weeks: data.weeks,

    }

  }
  render() {
    const drawerStyle ={
    height: "90%",
    top: "10%",
    width: "200px"
  }
    return (
      <Categories drawerStyle={drawerStyle} 
                  weeks={this.state.weeks}/>
    );
  }
}
export default CategoriesContainer;