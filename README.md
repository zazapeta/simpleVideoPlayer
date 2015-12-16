# SimpleVideoPlayer
This is a simple video player developped for onRewind.tv : the incredible LIVE-review platforme !

- Trello Board  : https://trello.com/b/X5CO3Ms0/onrewind-simplevideoplayer
- GitHub Repo   : https://github.com/zazapeta/simpleVideoPlayer
- Installation  : 
    - if git installed : 
        > npm install zazapeta/SimpleVideoPlayer
    - else : 
        > npm install -i --save https://github.com/zazapeta/simpleVideoPlayer/tarball/master

<hr>
Step: 

- Project initialisation : 
    - Trello Board
    - GitHub repo
    - npm init (because i ♥ npm)
    - Mockups your app ! (Even is not open source, i like Balsamik)
- Prepare your brain :
    - Read [HTML video tag API](http://www.w3.org/wiki/HTML/Elements/video "HTML Video tag") on the fabulous W3C.org (http://www.w3.org/wiki/HTML/Elements/video)
    - and [Video tag event](http://www.w3.org/2010/05/video/mediaevents.html "Html Video Event") (http://www.w3.org/2010/05/video/mediaevents.html)
- Library :
    1. Front :  
        - ReactJS (with Alt for more Fun ^^ and discover something new [isomorphic powa !])
        - Mocha for testing
        - PhantomJS + Mocha for end-to-end testing
    2. Back : None
- Deployment : 
    - GitHub
- Describe Usage : 


```js
import {SimpleVideoPlayer as SVP} from 'simplevideoplayer';
import React from 'react';
class App extends React.Component {
  render() {
    return (
        <div id="svp">
        <h1>Simple Video Player !</h1>
        <SVP 
            mp4 = {_ASSET["video"]["mp4"]}
            ogg = {_ASSET["video"]["ogg"]}
        />
        </div>
        
  }
}
 
React.render(<App/>, document.getElementById('app'));
```
