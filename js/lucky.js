/*
Random link button- By JavaScript Kit (http://javascriptkit.com)
Over 300+ free scripts!
This credit MUST stay intact for use
*/

//specify random links below. You can have as many as you want
var randomlinks=new Array()

randomlinks[0]="jose.html"
randomlinks[1]="barry.html"
randomlinks[2]="gordon.html"
randomlinks[3]="pagie.html"
randomlinks[4]="ruby.html"

function randomlink()
{
    window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}
