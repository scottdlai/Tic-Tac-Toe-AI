(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),c=a(4),u=a(3),i=a(5),s=a(0),o=a.n(s),l=a(7),f=a.n(l);a(13);function m(e){for(var t="TIE",a=0;a<3;a++)e[0][a]===e[1][a]&&e[1][a]===e[2][a]&&e[0][a]&&(t=e[0][a]);for(var r=0;r<3;r++)e[r][0]===e[r][1]&&e[r][1]===e[r][2]&&e[r][0]&&(t=e[r][0]);return e[0][0]&&e[0][0]===e[1][1]&&e[1][1]===e[2][2]&&(t=e[0][0]),e[0][2]&&e[0][2]===e[1][1]&&e[1][1]===e[2][0]&&(t=e[0][2]),t}function h(e){return e[0][0]&&e[0][1]&&e[0][2]&&e[1][0]&&e[1][1]&&e[1][2]&&e[2][0]&&e[2][1]&&e[2][2]}var v="O",b="X";function E(e){if(!h(e)){for(var t,a,r,n=-1/0,c=0;c<3;c++)for(var u=0;u<3;u++)if(!e[c][u])if(e[c][u]=v,r=d(e,0,!0,-1/0,1/0),e[c][u]="",r>n)n=r,t=c,a=u;else if(r===n){var i=Math.random();t=i<.35?c:t,a=i<.35?u:a}e[t][a]=v}}function d(e,t,a,r,n){if("TIE"!==m(e)||h(e)){var c=function(e){var t=m(e);return t===v?10:t===b?-10:0}(e);return c+=c>0?-t:t}var u;u=a?1/0:-1/0;for(var i=0;i<3;i++)for(var s=0;s<3;s++)if(!e[i][s]){e[i][s]=a?b:v;var o=d(e,t+1,!a,r,n);if(e[i][s]="",u=a?p(u,o):k(u,o),a?n=p(u,n):r=k(u,r),r>=n)break}return u}function p(e,t){return e<t?e:t}function k(e,t){return e>t?e:t}function O(e){var t="square "+(e.value?"":"hoverable ")+(e.value===b?b:v);return o.a.createElement("button",{className:t,onClick:e.onClick},o.a.createElement("span",null,e.value))}var j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"renderSquare",value:function(e,t){var a=this;return o.a.createElement(O,{value:this.props.squares[e][t],onClick:function(){return a.props.onClick(e,t)}})}},{key:"createBoard",value:function(){for(var e=[],t=0;t<3;t++){for(var a=[],r=0;r<3;r++)a.push(this.renderSquare(t,r));e.push(o.a.createElement("div",{className:"board-row"},a))}return e}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.createBoard())}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={squares:[["","",""],["","",""],["","",""]],humanFirst:!0,gameStart:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e,t){var a=this,r=this.state.squares.slice();if(!r[e][t]){if("TIE"!==m(r)||h(r))return o.a.createElement("button",{onClick:function(){return a.clearBoard()}},"REPLAY");r[e][t]=b,this.setState({squares:r,gameStart:!1}),E(r)}}},{key:"clearBoard",value:function(){this.setState({squares:[["","",""],["","",""],["","",""]],humanFirst:!this.state.humanFirst,gameStart:!0})}},{key:"render",value:function(){var e,t=this,a=this.state.squares,r="Tic-Tac-Toe",n=m(a);return this.state.gameStart&&!this.state.humanFirst&&(E(a),this.setState({squares:a,gameStart:!1})),("TIE"!==n||h(a))&&(r="Winner: "+n,e=o.a.createElement("button",{onClick:function(){return t.clearBoard()},className:"replay"},"REPLAY")),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"status"},r),o.a.createElement("div",{className:"game-board"},o.a.createElement(j,{squares:a,onClick:function(e,a){return t.handleClick(e,a)}})),o.a.createElement(o.a.Fragment,null,e))}}]),t}(o.a.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/tuonglai3602/Tic-Tac-Toe-AI"},"Made by Scott Lai")))}}]),t}(o.a.Component);f.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement(y,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f3f30bb5.chunk.js.map