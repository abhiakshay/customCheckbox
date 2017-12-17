# Customizing checkbox
Customize checkbox without using images and javascript and also do cool stuff with it.

## Toggle button:

"<input id="box1" type="checkbox">"
"<label id="label_box1" onTxt="ON" offTxt="OFF" for="box1" class="label-checkbox_toggle"></label>"

you can change any other property on label when checkbox is checked.

#### Attribute onTxt : you can specify the text that needs to be displayed when toggle is on
#### Attribute offTxt : you can specify the text that needs to be displayed when toggle is off

#### Attribute for="box1" : This tells label "label_box1" to react to the check events of checkbox with id "box1"

additional class "center" can be added on label for the circular toggle button.
additional class "line" can be added on label for the linear toggle button.

#### Make sure you add a container id while accessing checkbox and setting its display property to "none"
#### This is to avoid making it generic.  In this project, the container for toggle buttons is toggleCheckboxContainer
#### So the css becomes #toggleCheckboxContainer input[type="checkbox"] { display: none; }

#### The toggle button is scalable and the scaling is depend upon the font-size that was set on the parent container as it inherits it
#### if we have to show the text next to toggle button, the line height property needs to be set on container to make sure the text is middle align to toggle button


## custom form checkbox:

It has 4 different themes from theme0 to theme3. Add the theme class of your choice for the checkbox to take effect

"<input id="check1" type="checkbox">"
"<label id="label_check1"  for="check1" class="label-checkbox_custom theme0"></label>"

#### You can change the colors of the checkbox as per your needs