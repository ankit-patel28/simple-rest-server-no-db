function max(){
var a= parseInt(prompt("Enter Firt Number","Enter intiger Number only"));
var b= parseInt(prompt("Enter Second Number","Enter intiger Number only"));
if(a>b) 
{
document.getElementById("large1").value= a + " is the largest Number";
}
else
{
document.getElementById("large1").value = b + " Is the Largest Number";
}


}
function maxofthree(){

var a= parseInt(prompt("Enter Firt Number","Enter intiger Number only"));
var b= parseInt(prompt("Enter Second Number","Enter intiger Number only"));
var c= parseInt(prompt("Enter Third Number","Enter intiger Number only"));

if(a>b && a>c)
{
	document.getElementById("large2").value = a +" is the largest Number Then " + b +" And "+ c ;
}
else if(b>c && b>a)
{
	document.getElementById("large2").value = b +" is the largest Number Then " + a + " And "+ c ;
}
else
{
	document.getElementById("large2").value = c +" is the largest Number Then " + a  +" And "+ b;
}
}

// vowel 

function vowel(){
var a = prompt("Enter Any Character","Enter one character");

   
if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
{

	var x=document.getElementById("vowel");
	x.value=Boolean(1);
	
      
}
else{
	var x=document.getElementById("vowel");
	x.value=Boolean(0);
}
}

//String

function string(){
	var x=prompt("Enter The sentence","Enter only Three Word Long Sentence");
	
if(x!=null)
	{
		var text="";
		var h,i;
		var j=1;
		
		for(h=0;h<x.length;h++){
			
		for(i=h;i<x.length;i++)
		{
			
			text+=x[i];
			
			if(x[i]==' '){
				alert(text+ " is the " + j + " word");
				j++
				break;
				
			}
			
		}
		h=i;
		text="";
		}
	} 
	
}

//sum & Multiply

var sum1 = [1, 5, 5];


function sum(d){
	
    var i,x=0;
	for(i=0;i<d.length;i++)
	{
		x += d[i];
	
	}
	document.getElementById("sum1").value = x;
	
}
   
   
//multiply   

var mul1=[2,5,5,5,6];

function mul(m){
	var i,x=1;
	for(i=0;i<m.length;i++)
	{
		x*=m[i];
	}
	document.getElementById("mul1").value = x;
}

//reversal of the string

function reverse(){
	var x= new Array();
	x=prompt("Enter The String","Enter 3-4 Words String");
	//document.write(x.length);
	
	var text="";
	var i;
	if(x!=null)
	{
	
		for(i=x.length; i>=0; i--)
			text += x[i];
		
	}
	
	document.getElementById("reversal1").value=text;
}

//Find Longest Word Length

function findLongestWordLength(){
	
	var string=new Array();
	
	string=prompt("Enter The String","Write 3-4 word long Sentence ");
	
	//document.write(string.length);
	
	var i,j,k;
	var count1,word1="";
	var word2="";
	var length1, length2;
	for(i=0;i<string.length;i++)
	{
		word1+=string[i];
		if(string[i]==" ")
		{
			length1=word1.length-1;
			count1=i;
			//document.getElementById("longw").value = "1 Word :- " + word1, " || Total Character are :- " + length1 + "<br/>";
			break;
			
		}
		
		
	}
	
	var count2=count1+1;
	var x=2;
	
		for(j=count2;j<string.length;j++)
			{
		for(k=j;k<string.length;k++)
		{
		word2+=string[k];
		
		if(string[k]==" ")
		{
			length2=word2.length-1;
		
		//document.getElementById("longw").value = x ," Word :- " + word2, " || Total Character are :- " + length2 + "<br/>";
		//alert("hello");
		 x++;
          break;
		
		}
	
		}
			if(length1>length2)
		{
			maxword=word1;
			maxlen=maxword.length-1;
		}
		else
		{
			word1=word2;
			length1=length2;
			maxword=word1;
			maxlen=maxword.length-1;
			
		}
		
	j=k;
	
	word2="";

			}
			
			
document.getElementById("longw").value="Maximum Word is " + maxword + " & total Character are "+ maxlen ;
	} 
	
	
	
	//returns the array of words that are longer than i.

	
	function filterLongWords(){
		
		var string=new Array();
	
	string=prompt("Enter The String","Write 3-4 word long Sentence ");
	var x=prompt("Enter The Integer number","Enter Number between 1-15 ");
	
	var i,j,word;
	var wordength,maxword
	
	for(i=0;i<string.length;i++)
	{
		word="";
		for(j=i;j<string.length;j++)
		{
			word+=string[j];
			if(string[j]==" ")
			{
				wordlength=word.length-1;
				break;
				
			}
		}
		if(wordlength>x)
		{
			maxword=word;
			document.write("<b>" + maxword + " </b>Word Length is Greater Then The Number <b>" + x + " </b><br/>");
			
		}
		i=j;
		
	}
	}
