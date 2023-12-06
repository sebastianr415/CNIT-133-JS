const targetElement = document.querySelector('main');

const backgroundRadioButtons = document.querySelectorAll('input[name="background-color"]');

const fontStyleCheckboxes = document.querySelectorAll('input[type="checkbox"][name="font-style"]');

const fontSizeSelect = document.querySelector('select[name="font-size"]');

function updateBackgroundColor() {
  const selectedBackgroundColor = document.querySelector('input[name="background-color"]:checked').value;
  targetElement.style.backgroundColor = selectedBackgroundColor;
}

function updateFontStyle() {
  const selectedFontStyles = [];
  for (const checkbox of fontStyleCheckboxes) {
    if (checkbox.checked) {
      selectedFontStyles.push(checkbox.value);
    }
  }
  targetElement.style.fontStyle = selectedFontStyles.join(' ');
}

function updateFontSize() {
  const selectedFontSize = fontSizeSelect.value;
  targetElement.style.fontSize = selectedFontSize;
}

for (const radioButton of backgroundRadioButtons) {
  radioButton.addEventListener('change', updateBackgroundColor);
}

for (const checkbox of fontStyleCheckboxes) {
  checkbox.addEventListener('change', updateFontStyle);
}

fontSizeSelect.addEventListener('change', updateFontSize);

updateBackgroundColor();
updateFontStyle();
updateFontSize();
