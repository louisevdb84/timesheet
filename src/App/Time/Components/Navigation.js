import React, { Component } from 'react';

import { Button } from '../../../assets/components';

class Navigation extends Component {
  render() {
    return (
      <div>
      <Button icon color="success" size="lg">          
          {"<"}
      </Button>  
        <Button icon color="success" size="lg">          
          Today
      </Button>
      <Button icon color="success" size="lg">          
          {">"}
      </Button>
      <Button icon color="success" size="lg">          
          Calendar
      </Button>
      <Button icon color="success" size="lg">          
          Day
      </Button>
      <Button icon color="success" size="lg">          
          Week
      </Button>
      <Button icon color="success" size="lg">          
        Month
     </Button>    
      </div>
    );
  }
}

export default Navigation;