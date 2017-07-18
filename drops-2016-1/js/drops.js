
//##############################################################################################
// COMBAT DROPS - 2016 - 1 
//##############################################################################################


//##############################################################################################
// Com1
//##############################################################################################


// Quick Brown Fox Problem - write a function that converts "The Quick Brown Fox..." into "abcdefg...."

function alphabetise(S) {
	var i, alphabets = [], uniqueAlphabets = [], alphabetised;

	// convert to array of characters
	alphabets = S.toLowerCase().split("");
	
	console.log(alphabets);
	
	// push all unique characters into separate array
	for (i=0; i < alphabets.length; i++) {
		if (uniqueAlphabets.indexOf(alphabets[i]) === -1) {
			if (alphabets[i] !== " ") {
				uniqueAlphabets.push(alphabets[i]);		
			}
		}
	}	
	
	// sort alphabetically
	uniqueAlphabets.sort();
	console.log(uniqueAlphabets);
	
	// re-combine into a single string
	for(i=0; i < uniqueAlphabets.length; i++) {	
		alphabetised = uniqueAlphabets.join("");	
	}
	console.log(alphabetised);
}



// 
// Sort numbers numerically 
function cmp(a, b) { return a - b; }


// Find the Bug in this code.
function findTheBug(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        if (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    return -1;
}


// Write Code to validate Form. 
$(document).on('change', 'input', function() {

	var firstName, lastName, emailAddress, companyName, phoneNumber, phoneDigits =[], numberOfDigits = 0, errorMessages =[];

	if ($('input[name=type]:checked').val() == "person") {
		console.log('person');
				
		firstName = $('#first_name').val();
		lastName = $('#last_name').val();
		emailAddress = $('#email').val();
		
		console.log('First:'+firstName+' Last:'+lastName+' email:'+emailAddress+'\n')
	
	
		// Check if empty 
		if ((firstName === "") || (lastName === "") || (emailAddress === "")) {
			console.log('All fields not filled in');
			errorMessages.push("Please fill out all fields");			
			return false;
		}

		// Check if email is valid
		if (emailAddress.match(/[a-zA-Z0-9\.]{1,64}@[a-zA-Z0-9\.]{1,64}/)) {
			console.log('email is valid');
		}	else {
			console.log('email is not valid');
			errorMessages.push("Email Address is not valid");
			return false;
		}
		return true;
	
	
	} else if ($('input[name=type]:checked').val() == "company") {
		console.log('company');
		
		companyName = $('#company_name').val();
		phoneNumber = $('#phone').val();
		
		console.log('Company:'+companyName+' Phone:'+phoneNumber+'\n')

		// Check if empty 
		if ((companyName === "") || (phoneNumber === "")) {
			console.log('All fields not filled in');
			errorMessages.push("Please fill out all fields");	
			return errorMessages;
				
		}
		
		// Check if phone number is valid		
		
		if (emailAddress.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)) {
			console.log('email is valid');
		}	else {
			console.log('email is not valid');
			errorMessages.push("Email Address is not valid");
			return false;
		}
		return true;
		
		
		
		
		
/*
		phoneDigits = phoneNumber.split('');		
		
		for (i=0; i < phoneDigits.length; i++) {
	
			// check character 	
			if (phoneDigits[i].match(/[0-9]/) ){
				numberOfDigits++;
					
							
			} else if (phoneDigits[i].match(/[^\- ]/) ) {
				return false;	
					
			}		
		}	
		
		console.log('Number of Digits: '+ numberOfDigits);
		
		if (numberOfDigits < 6) {
			console.log('Invalid Phone Number. Minimum 6 digits')
			return false;	
		}
*/
		
		
		console.log('Valid Phone Number');
		
		
		return true;
	}
	while (errorMessages.length !== 0) {
		var errorMsg = errorMessages.pop();
		console.log(errorMsg);
		$('#error_messages').html(errorMsg);					
	}
	

});

// Finds the length of the longest substring of a valid password in user's string.
function passwordChecker(S) {
	
	var i, currentSubstring = 0, longestSubstring = -1, passArray = [], uppercaseFound = false;
	
	// break password up into an array of characters
	passArray = S.split('');

	for (i=0; i < passArray.length; i++) {

		// check character 	
		if (passArray[i].match(/[A-Z]/) ){
			uppercaseFound = true;
			currentSubstring++;
			console.log('Uppercase Found '+currentSubstring);	
						
		} else if (passArray[i].match(/[a-z]/) ) {
			currentSubstring++;	
			console.log('Lowercase Found '+currentSubstring);	
		
		} else {	// must be a number (based on valid inputs)
			if ((currentSubstring > longestSubstring) && uppercaseFound) {
				longestSubstring = currentSubstring;		
			}
			currentSubstring = 0;
			uppercaseFound = false;			
			console.log('Digit found - reset counter');
		} 		
	}	
	if ((currentSubstring > longestSubstring) && uppercaseFound) {
		longestSubstring = currentSubstring;		
	}

	return longestSubstring;
}






//----------------------------------------------------------------------------------------------
// AddClass function to emulate JQuery's addClass()
//----------------------------------------------------------------------------------------------

function addClass(el, newClass){
	if (el.className === '') {
		el.className += newClass;   	
	} else {
		el.className += ' '+newClass;   	
	}
}

function removeClass(el, removeClass){
	var elClass = ' '+el.className+' ';
	while(elClass.indexOf(' '+removeClass+' ') !== -1) {
	   elClass = elClass.replace(' '+removeClass+' ', '');
	}     
	el.className = elClass;
}


//##############################################################################################
// Com2
//##############################################################################################


//----------------------------------------------------------------------------------------------
// Show Endorsements function
//----------------------------------------------------------------------------------------------

// Given the Array of Objects endorsements, Output skills and corresponding users (in array)

var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
// Result
/* skillsArray[]
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/


// Endorsed Skills Function. Given Array of Objects of skills/users, 
// consolidate to an array of objects with unique key values of skills with an array of users and count of users.

function endorsedSkills(objArr) {

	var i, objArrLen = objArr.length, hashSkills = {}, output = [];

	for(i=0; i < objArrLen; i++) {
	
		// Check to see if hashSkills hash table already exists, if not create hash table entry for that skill with an empty array for value
		if(!hashSkills.hasOwnProperty(objArr[i].skill)) {
			hashSkills[objArr[i].skill] = [];
			//console.log(objArr[i].skill + ' found');
		}				
		
		// For all entries with skill css, append to its hash tables corresponding array.
		if (objArr[i].skill === 'css') {
			//console.log('CSS found');
			hashSkills['css'].push(objArr[i].user);		
		}

		// For all entries with skill javascript, append to its hash tables corresponding array.		
		if (objArr[i].skill === 'javascript') {
			//console.log('JS found');
			hashSkills['javascript'].push(objArr[i].user);		
		}

		// For all entries with skill html, append to its hash tables corresponding array.
		if (objArr[i].skill === 'html') {
			//console.log('JS found');
			hashSkills['html'].push(objArr[i].user);		
		}
			
	}	
	// Created {"css":["Bill","Sue"],"javascript":["Chad","Bill","Sue"],"html":["Sue"]}

	// Output as Array of Objects
	for (skill in hashSkills) {
		output.push({ skill: skill, user: hashSkills[skill], count: hashSkills[skill].length });
	}	
	
	console.log(JSON.stringify(output));
	//return output;
}





//##############################################################################################
// Com3
//##############################################################################################


//----------------------------------------------------------------------------------------------
// Set A Variable Function
//----------------------------------------------------------------------------------------------

/*
Given:

var thing = new Thing();

How would you implement the following functionality:

thing.set('x', val);
thing.set('y', val2);

console.log(thing.get('x')); // val
console.log(thing.get('y')); // val2 
*/



function Thing() {
	var temp = {};

	this.get = function(key) {
		return temp[key];
	}
	
	this.set = function(key, val) {
		temp[key] = val;
	}

}


//##############################################################################################
// Com4
//##############################################################################################


//----------------------------------------------------------------------------------------------
// Write a Function to find the Nth Prime number. Assume only positive values
//----------------------------------------------------------------------------------------------


// Number not divisible by itself or 1
function isPrime(num) {

	if (num > 1) {
		// Check all numbers from 2 upwards to num. If divisible, return false
		for (var i = 2; i < num; i++) {
			if ((num % i) === 0) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

// Find the Nth Prime Number. Assumption: N is positive.
function nthPrime(n) {
	var num = 2, primeArray = [], nth = n;
	
	if (nth === 1) {
		return 2;
	}

	// Add prime numbers into primeArray until it has nth numbers in array			
	while (primeArray.length < nth) {
		if (isPrime(num)) {
			primeArray.push(num);
			num += 1;
		} else {
			num += 1;
		}
	}
	console.log(primeArray);
	return primeArray[nth-1];
}


//##############################################################################################
// Com5
//##############################################################################################


//----------------------------------------------------------------------------------------------
// Write output below (should take you under 5 minutes):
//----------------------------------------------------------------------------------------------



/*
   Implement the `hasBadwords` function in the code below to return a boolean if the
   message contains a badword in it or not.  A badword is contained in the message
   if the word appears in the sentence, ignoring adjacent punctuation and case.
*/
 
var sentences = [
   "I now took the measure of the bench, and found that it was a foot too short; but that could be mended with a chair.",
   "But it was a foot too narrow, and the other bench in the room was about four inches higher than the planed one--so there was no yoking them.",
   "I then placed the first bench lengthwise along the only clear space against the wall, leaving a little interval between, for my back to settle down in.",
   "But I soon found that there came such a draught of cold air over me from under the sill of the window, that this plan would never do at all, especially as another current from the rickety door met the one from the window, and both together formed a series of small whirlwinds in the immediate vicinity of the spot where I had thought to spend the night.",
   "The devil fetch that harpooneer, thought I, but stop, couldn't I steal a march on him--bolt his door inside, and jump into his bed, not to be wakened by the most violent knockings? It seemed no bad idea; but upon second thoughts I dismissed it.",
   "For who could tell but what the next draught, so soon as I popped out of the room, the harpooneer might be standing in the entry, all ready to knock me down!"
];
 
var badwords = ['window', 'chair', 'knockings'];
 
// Fill in function body here
var hasBadwords = function (message, index) {
	if (message.indexOf(index) == -1) {
		return false;
	} else {
		return true;
	}
}
 
// Tell us what the output is from running this code:
console.log(sentences.map(function (sentence, index) {
   return hasBadwords(sentence) ? index : '';
}).join(''));

// returns undefined


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ END OF DROPS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//##############################################################################################
// Random Exercises
//##############################################################################################


// FUNCTION TO SEARCH OBJECT VALUES FOR A STRING PATTERN (e.g. lo in lorem & dolor blor)

// Function to 
function trimString(s) {
	var l=0, r=s.length -1;
	while(l < s.length && s[l] == ' ') l++;
	while(r > l && s[r] == ' ') r-=1;
	return s.substring(l, r+1);
}

function compareObjects(o1, o2) {
	var k = '';
	for(k in o1) if(o1[k] != o2[k]) return false;
	for(k in o2) if(o1[k] != o2[k]) return false;
	return true;
}

function itemExists(haystack, needle) {
	for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
	return false;
}

var objects = [
  {
    "foo" : "bar",
    "bar" : "sit"
  },
  {
    "foo" : "lorem",
    "bar" : "ipsum"
  },
  {
    "foo" : "dolor blor",
    "bar" : "amet bl"
  }
];

function searchFor(toSearch) {
	var results = [];
	toSearch = trimString(toSearch); // trim it
	for(var i=0; i < objects.length; i++) {
		for(var key in objects[i]) {
			if(objects[i][key].indexOf(toSearch)!=-1) {
				if(!itemExists(results, objects[i])) results.push(objects[i]);
			}
		}
	}
	return results;
}

//console.log(searchFor('lo '));


// Equi Leader
// Create Suffix Leader Array then calculate Prefix Leader while comparing with Suffix Leader Array to see if Leaders match at any point

function solution(A) {
	var i, len = A.length, currentLeader, suffixLeaderArray = {};
	
		
	
	// Calculate Suffix Leader Array from back to front of array
	
	// First Suffix Leader is last number in array because it is the only number.
	currentLeader = A[len-1];
//	suffixLeaderArray.push({currentLeader-1: 1});	
	
	for (i=len-2; i >= 0; i--) {

		if (currentLeader > A[i]) {
			suffixLeaderArray[currentLeader-1] = suffixLeaderArray[currentLeader-1] + 1;	
		} else {
			suffixLeaderArray[A[i]-1] = suffixLeaderArray[A[i]-1] + 1;	
			currentLeader = A[i];			
		}
	}
	console.log(suffixLeaderArray);
	return suffixLeaderArray;



	// Now calculate the Prefix Leader and compare it with its equivalent Suffix Leader
	
	//currentLeader = A[0];
/*
	if (currentLeader === suffixLeaderArray[]) {
	
	}
	
	for (i=0; i< len; i++) {
			
	
	
	}
*/

}


// ########## UNIT TEST - Single Array of Digits ############
function testSingleArrays() {
	var tests = [];
	tests.push([0, [4,3,4,4,4,2] ]); 				// Codility's Example
	tests.push([1, [] ]);								// Empty Array
	tests.push([2, [-4,2,-6,3,7,-2,6,-3] ]);		// Random 
	tests.push([3, [5,5,5,5,5] ]);					// Duplicates
	tests.push([4, [5] ]);								// Single Element
	tests.push([5, [1,2,3,4,5,6,7,8] ]);			// All Unique
	tests.push([6, [-3,-2,-5,-4,-2,-1] ]);			// All Negative
	tests.push([7, [-24354837543087,74536349872623] ]);	// Extremes
	
	while(tests.length > 0) {
		var arr = tests.pop();
		solution(arr[1]);
	}

}



//##############################################################################################
// JAVASCRIPT OBJECT EXERCISES - http://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
//##############################################################################################

// Question 1
// Write a JavaScript program to list the properties of a JavaScript object

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var listKey = function(obj) { 
	var keys = [];
	for(key in obj) {
				
		keys.push(key);
	}	
	return keys;  
}

// Question 2
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property

var deleteProp = function(key, obj) {
	
	delete obj[key];
	return obj;
}

// Question 3
// Write a JavaScript program to get the length of an JavaScript object

var objectLength = function(obj) {

	return Object.keys(obj).length;

}


// Question 4
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
];


var displayReadingStatus = function(arrObj) {
	var i, arrayLen = arrObj.length, output = "", read = '';
	
	for (i=0; i < arrayLen; i++) {
		if(!arrObj[i].readingStatus) { 
			read = 'not read ';
		} else {
			read = 'read ';
		}
		output = output + 'You have ' + read + arrObj[i].author + ' by ' + arrObj[i].title + '\n';		
	}
	return output;
}


// Question 5
// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. V = πr2h

var cylinderVolume = function(radius, height) {

	return Math.PI * radius * radius * height;

}

// Question 6
// Write a Bubble Sort algorithm in JavaScript. [6,4,0, 3,-2,1] -> [-2, 0, 1, 3, 4, 6]
// Bubble sort: Sort 2 numbers side by side going down array, last number is sorted after each pass.
var bubbleSort = function(unsortedArr) {
	var i, j, arrayLen = unsortedArr.length, swapVal = 0;
	
	// 
	for (i=0; i < arrayLen; i++) {
		
		for (j=0; j < arrayLen - i - 1; j++) {
		
			// If first number is larger than second, swap them.
			if (unsortedArr[j] > unsortedArr[j+1]) {
				
				swapVal = unsortedArr[j];
				unsortedArr[j] = unsortedArr[j+1];
				unsortedArr[j+1] = swapVal;
			}	
				
		}
	
	}
	return unsortedArr;
}


// Question 7
// Write a JavaScript program which returns a subset of a string. e.g. dog returns ["d", "do", "dog", "o", "og", "g"]

var subsetString = function(str) {
	var i, j, subsets = [], len;
	
	len = str.length;
	
	for(i=0; i<len; i++) {
		for(j=i+1; j<len+1; j++) {
			subsets.push(str.slice(i,j));
		}
	}
	console.log(subsets);
	//return(JSON.stringify(subsets));
}


// Question 8
// Write a function to output the current time every second.
// Expected Console Output : "14:37:42" "14:37:43" "14:37:44" ...

var currentTime = function() {

	this.showTime = function() {
		this.cur_date = new Date();  
		this.hours = this.cur_date.getHours();  
		this.minutes = this.cur_date.getMinutes();  
		this.seconds = this.cur_date.getSeconds();  
		console.log(this.hours+':'+this.minutes+':'+this.seconds+'\n');
	}
	
	setInterval(this.showTime, 1000);


}

// Question 9
// Write a JavaScript program to calculate the area and perimeter of a circle.

function circle(radius)  
{  
	this.radius = radius;  

	// area method  
	this.area = function ()   
	{  
		return Math.PI * this.radius * this.radius;  
	};  
	
	// perimeter method  
	this.perimeter = function ()  
	{  
		return 2 * Math.PI * this.radius;  
	};  
}  



// Question 10
// Write a JavaScript program to sort an array of JavaScript objects.

var unsortedLibrary = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }
];


//##############################################################################################
// FizzBuzz Alternatives - Top 5 Interview Questions
// http://david.elbe.me/developers/hiring/2014/09/17/fizzbuzz-alternatives.html
//##############################################################################################

// 1 - Anagram

function isAnagram(word1, word2) {
	var wordArr1 = [], wordArr2 = [];
	
	wordArr1 = word1.split('');
	wordArr2 = word2.split('');

	// Anagrams MUST have the same number of letters
	if (wordArr1.length === wordArr2.length) {
		
		for (var i =0; i < wordArr1.length; i++) {
			// If no character in first word is found in second word, not Anagram
			var wordArr2Index = wordArr2.indexOf(wordArr1[i]);
			if ( wordArr2Index === -1) {
				return false;
			} else {
				wordArr2.splice(wordArr2Index, 1);
			}
			
		}		
		if (wordArr2.length === 0) {
			return true;
		} else {
			return false;
		}
		
	} else {
		return false;
	}			 
}


// 2 - 




