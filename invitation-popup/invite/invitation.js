//##############################################################################################
// Invitation/Email Subscription JS
// 5/20/2016
// Fire the invitation only after the user has been on the site for timeSecods seconds
// Fire the invite after pageNum number of pages have been visited
// Allow customisation of invitation's text in On Page Load
//##############################################################################################


// @@@ Load Invitation @@@
function showInvitation(customInvite) {
		
	// Create link to invitation CSS file
	var invitationCSS = document.createElement("link");
	invitationCSS.setAttribute("rel", "stylesheet");
	invitationCSS.setAttribute("type", "text/css");
	invitationCSS.setAttribute("href", "invite/invitation.css");	

	
	// Create Invitation Modal with its Class
	var invitationModal = document.createElement('div');
	invitationModal.className = "invitation-modal";
	
	
	// Create Welcome Text passing in customInvite text specified 
	var invitationParagraph = document.createElement('p');
	var invitationText = document.createTextNode(customInvite);
	invitationParagraph.appendChild(invitationText);	
	
	// Create Form to submit Email
	var invitationForm = document.createElement("form");
	invitationForm.setAttribute('method',"post");
	invitationForm.setAttribute('action',"invite/mail.php");
	
	var inputEmail = document.createElement("input"); //input element, Email
	inputEmail.setAttribute('type',"email");
	inputEmail.setAttribute('name',"email");
	inputEmail.setAttribute('placeholder',"example@domain.com");
	inputEmail.required = true;
	inputEmail.autofocus = true;
	
	var submitEmail = document.createElement("input"); //input element, Submit button
	submitEmail.setAttribute('type',"submit");
	submitEmail.setAttribute('value',"Submit");
	submitEmail.className = "submit-email";
	
	// Append all nodes to form, then to modal
	invitationForm.appendChild(invitationParagraph);	
	invitationForm.appendChild(inputEmail);
	invitationForm.appendChild(submitEmail);

	invitationModal.appendChild(invitationForm);
	
	
	// Append CSS file & Modal to header and body respectively
	document.getElementsByTagName('head')[0].appendChild(invitationCSS);	
	document.getElementsByTagName('body')[0].appendChild(invitationModal);	

	
	console.log('Invitation Modal Shown');
		
		
}
// TBD
function closeInvitation() {
	console.log('Close Invitation Called');
	document.getElementsByClassName('invitation-modal')[0].style.visibility = 'hidden';
}

// @@@ Fire after timeSeconds seconds on page @@@
function userTimeOnPage(timeSeconds, customInvite) {

	console.log("Invitation will show after " + timeSeconds + " seconds");

	// Call Invite after timeSeconds seconds on page
	setTimeout(function() {
			showInvitation(customInvite);
		}, 
		timeSeconds * 1000 );
}


// @@@ Check for Pages Visited @@@
function userPagesVisited(pageNum, customInvite) {

	if ((localStorage.pageViews = (+localStorage.pageViews || 0) + 1) > pageNum) {
	    showInvitation(customInvite);
	    console.log(pageNum + " pages viewed by user");
	}

}


// @@@ On Page Load @@@
window.onload = function(){
	// Customise time before invitation pops up
	var pageDelay = 5;
	
	// Customise number of page views before invitation pops up
	var pagesViewed = 2;
	
	// Customise your invitation text here.
	var customInvite = "You seem to like our website! Why not sign up for our email list? We'll send you updates whenever something changes!";
	
	// # Page Time #
	// Fire invitation after 5 seconds
	userTimeOnPage(pageDelay, customInvite);

	// Fire invitation after 2 page visits	
	//userPagesVisited(pagesViewed, customInvite);
	
	// TESTING - Clear localstorage to repeat userPagesVisited test
	//localStorage.clear();

	// TODO Allow user to opt out by clicking outside modal
	//var body = document.getElementsByTagName('body');
	//body[0].addEventListener('click', function() { closeInvitation(); });

}



