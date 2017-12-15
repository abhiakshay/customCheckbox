# Custom Checkbox
Customize checkbox and radio buttons to create toggle buttons or tabs

For toggle buttons:
add following in your html:

<input id="box1" type="checkbox">
<label id="label_box1" onTxt="ON" offTxt="OFF" for="box1" class="label-checkbox_toggle"></label>

The ids will be used for transitioning the toggle when clicked.

#box1:checked ~ #label_box1{
    opacity: 1;
}

#box1:checked ~ #label_box1:before{
    right: 1px;
}

you can change any other property on label when checkbox is checked.

Attribute onTxt : you can specify the text that needs to be displayed when toggle is on
Attribute offTxt : you can specify the text that needs to be displayed when toggle is off

for="box1" : This tells label "label_box1" to react to the check events of checkbox with id "box1"