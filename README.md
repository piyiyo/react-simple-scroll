# react-simple-scrolldown

ReactJS ES6 simple scroll down animation with minimal usage.

## Installation

npm i react-simple-scrolldown

## Usage

Make sure the target element has as className the same id of the source element.
scrollDown accepts two parameters, event and callback.

```javascript
    import React from 'react';
    import ReactScroll from 'react-simple-scroll';
    
    class Foo {
      constructor() {
        super();
        this.reactScroll = new ReactScroll();
      }

      render() {
        return(
          <React.Fragment>
            <a href="#" id="target" onClick={this.reactScroll.scrollDown}>Link text</a>
            ...
            <div className="target">content</div>
          </React.Fragment>
        );
      }
    }
```
