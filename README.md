# Custom Checkbox
Customize checkbox and radio buttons to create toggle buttons or tabs

## For toggle buttons add following in your html:

<input id="box1" type="checkbox">
<label id="label_box1" onTxt="ON" offTxt="OFF" for="box1" class="label-checkbox_toggle"></label>

### you can change any other property on label when checkbox is checked.

Attribute onTxt : you can specify the text that needs to be displayed when toggle is on
Attribute offTxt : you can specify the text that needs to be displayed when toggle is off

for="box1" : This tells label "label_box1" to react to the check events of checkbox with id "box1"

additional class "center" can be added on label for the circular toggle button.
additional class "line" can be added on label for the linear toggle button.