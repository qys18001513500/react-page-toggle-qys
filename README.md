# react-page-toggle-qys [![npm](https://img.shields.io/npm/v/react-infinite-scroll-component.svg?style=flat-square)](https://www.npmjs.com/package/react-page-toggle-qys)



# install
```bash
  npm install --save react-page-toggle-qys

  // in code ES6
  import pageToggle from 'react-page-toggle-qys';
  // or commonjs
  var pageToggle = require('react-page-toggle-qys');
```

# using

```jsx
<PageToggle
    loadData={loadData}
    length={length}
    currentPage={currentPage}
    hasMoreItems={hasMoreItems}
    style={{..}} 
    // below props only if you need config your btn style, it is not necessary, it has default style
    homeBtn={<div style={{..}}>..</div>}
    prevBtn={<div style={{..}}>..</div>}
    nextBtn={<div style={{..}}>..</div>}
 >
  {items}
</PageToggle>
```

# props
name | type | description
-----|------|------------
**loadData** | function | a function which must be called after triggering the button. It must trigger some sort of action which fetches the next data. 
**hasMoreItems** | boolean | it tells the `PageToggle` component on whether to call `next` function on reaching the bottom and shows an `endMessage` to the user
**length** | number | set the length of the data.This will unlock the subsequent calls to next.
**currentPage** | number | currentPage
**style** | object | any style which you want to override
**homeBtn** | object | any style which you want to show the homeBtn, `default={<i className="iconfont icon-zhuye" style={zySty}/>}`
**prevBtn** | object | any style which you want to show the prevBtn, `default={<i className="iconfont icon-icon-test1" style={preSty}/>}`
**nextBtn** | object | any style which you want to show the nextBtn, `default={<i className="iconfont icon-icon-test2" style={nextSty}/>}`
