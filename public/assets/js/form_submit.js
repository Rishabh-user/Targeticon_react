jQuery(document).ready(function () {

  jQuery("#contactus #submit").click(function (event) {
    event.preventDefault(); // Prevent the default form submission

    var submit = jQuery("#contactus #submit").val();
    var user_name = jQuery("#contactus #name").val();
    var user_email = jQuery("#contactus #email").val();
    var user_phone = jQuery("#contactus #phone").val();
    var user_message = jQuery("#contactus #message").val();

    var user_name_temp = "0";
    var user_email_temp = "0";
    var user_phone_temp = "0";
    var user_message_temp = "0";

    function isValidUserName(user_name) {
      var pattern = new RegExp(/^([a-zA-Z]{3,20})/i);
      return pattern.test(user_name);
    }

    function isValidEmailAddress(user_email) {
      var pattern = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return pattern.test(user_email);
    }

    function isValidUserPhone(user_phone) {
      var pattern = new RegExp(
        /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/i
      );
      return pattern.test(user_phone);
    }

    // validation of name
    if (user_name == "") {
      jQuery("#contactus #name")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Full Name");
      user_name_temp = "1";
    } else if (isValidUserName(user_name)) {
      jQuery("#contactus #name")
        .parent()
        .find("span")
        .attr("class", "success")
        .text("");
      user_name_temp = "0";
    } else {
      jQuery("#contactus #name")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Full Name");
      user_name_temp = "1";
    }

    // validation of email
    if (user_email == "") {
      jQuery("#contactus #email")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Email ID");
      user_email_temp = "1";
    } else if (isValidEmailAddress(user_email)) {
      jQuery("#contactus #email")
        .parent()
        .find("span")
        .attr("class", "success")
        .text("");
      user_email_temp = "0";
    } else {
      jQuery("#contactus #email")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Valid Email ID");
      user_email_temp = "1";
    }

    // validation of phone
    if (user_phone == "") {
      jQuery("#contactus #phone")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Phone Number");
      user_phone_temp = "1";
    } else if (isValidUserPhone(user_phone)) {
      jQuery("#contactus #phone")
        .parent()
        .find("span")
        .attr("class", "success")
        .text("");
      user_phone_temp = "0";
    } else {
      jQuery("#contactus #phone")
        .parent()
        .find("span")
        .attr("class", "error")
        .text("Please Enter your Phone Number");
      user_phone_temp = "1";
    }

    // validation of message
    // if (user_message == "") {
    //   jQuery("#contactus #message")
    //     .parent()
    //     .find("span")
    //     .attr("class", "error")
    //     .text("Please Enter your Message");
    //   user_message_temp = "1";
    // } else {
    //   user_message_temp = "0";
    // }

    // check if all fields are valid
    if (user_name_temp != "0" || user_email_temp != "0" || user_phone_temp != "0" || user_message_temp != "0") {
      jQuery(".form-response").html(
        '<div class="alert alert-danger mt-3">Please fill all required fields!</div>'
      );
      return false;
    }

    // Send data via AJAX
    jQuery.ajax({
      url: "https://api.securestaging.net/api/v2/contactus/contact",
      type: "POST",
      contentType: "application/json", // Ensure the request is sent as JSON
      dataType: "json",
      data: JSON.stringify({
        name: user_name,
        email: user_email,
        skype: '', // You can leave this empty if it's not required
        subject: 'Advertise Landing Page',
        service: 'Advertise Landing Page',
        contact: user_phone,
        message: user_message
      }),
      success: function (response) {
        if (response.error == "error") {
          jQuery(".form-response").html(
            '<div class="alert alert-danger mt-3">' + response.message + "</div>"
          );
        } else {
          window.location.href = "https://www.targeticon.com/thankyou.html";
          jQuery(".form-response").html(
            '<div class="alert alert-success mt-3">' + response.message + "</div>"
          );
          jQuery("#contactus #name").val("");
          jQuery("#contactus #email").val("");
          jQuery("#contactus #phone").val("");
          jQuery("#contactus #message").val("");
          jQuery("#contactus").find("span").attr("class", "");
          jQuery("#contactus").find("label").removeClass("active");
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
        jQuery(".form-response").html(
          '<div class="alert alert-danger mt-3">An error occurred. Please try again later.</div>'
        );
      }
    });

    return false; // prevent default form submission
  });
});
