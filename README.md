# AngularForms

A template driven approach to angular form where in template driven approach when angular sees the form element it creates empty form javascript object but angular doesn't create object when it sees element like input or select element so to angular  create javascript object we should place ngModel directive and a name for that input elements so angular creates object in key value pair 

Validations to form can be done all in template itself "required" attribute to make it field required and email attribute to validate the email and disabled property can be used to disable the submit button when any of the data is invalid.. when submiiting the data ngForm directive is used to collect all the data from the field and by using reference variable we can do so and ngSubmit directive is used to submit the values of form 
