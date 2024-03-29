const h1=React.createElement('h1',{class:"h2"},'Topics covered');
const a1=React.createElement('a',{class:"a"},'Getting started with the web');
const p1=React.createElement('p',{},'Provides a practical introduction to web development for complete beginners. ');
const div1=React.createElement('div',{} ,[a1,p1]);
const a2=React.createElement('a',{class:"a"},'HTML Structuring the web');
const p2=React.createElement('p',{},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail. ');
const div2=React.createElement('div',{} ,[a2,p2]);
const a3=React.createElement('a',{class:"a"},'CSS-Styling the web');
const p3=React.createElement('p',{},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS'");
const div3=React.createElement('div',{} ,[a3,p3]);
const div =React.createElement('div',{ id:"div"} ,[h1,div1,div2,div3]);
ReactDOM.render(div,document.getElementById('root'));