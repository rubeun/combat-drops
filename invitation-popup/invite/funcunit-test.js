// Test popup window using FuncUnit

module("popupTests",{
  setup: function() {
    S.open('index.html')
  }
});

test("popup appears",function(){

  // wait until popup appears
  S('.invitation-modal').visible(function(){

    // check there's one popup
    equal( S('.invitation-modal').size(), 1, "there is a popup")

    // type email address into popup
    S('.invitation-modal').type("me@rubeun.com")

    // click the submit button
    S('.submit-button').click()
  })
});