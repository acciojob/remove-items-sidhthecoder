//your JS code here. If required.
function Remove() {
	var selectElement = document.getElementById("colorSelect");
    var selectedValue = selectElement.value;
    var selectedOption = selectElement.querySelector(`option[value="${selectedValue}"]`);
    selectElement.removeChild(selectedOption);
}