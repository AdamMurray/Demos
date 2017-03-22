Polymer({
  is: 'my-view2',

  ready: function () {
    const fontSizeDecreaseButton = this.$.fontSizeDecrease;
    const fontSizeIncreaseButton = this.$.fontSizeIncrease;
    const fontSizeResetButton = this.$.fontSizeReset;
    const contentDiv = this.$.contentDiv;
    const controls = this.$.controls;

    contentDiv.style.fontSize = '16px';

    fontSizeDecreaseButton.addEventListener('click', (evt) => {
      const currentFontSize = contentDiv.style.fontSize.split('px')[0];
      const newFontSize = parseInt(currentFontSize) - 1;
      contentDiv.style.fontSize = `${newFontSize}px`;
    });

    fontSizeIncreaseButton.addEventListener('click', (evt) => {
      const currentFontSize = contentDiv.style.fontSize.split('px')[0];
      const newFontSize = parseInt(currentFontSize) + 1;
      contentDiv.style.fontSize = `${newFontSize}px`;
    });

    fontSizeResetButton.addEventListener('click', (evt) => {
      contentDiv.style.fontSize = '16px';
    });
  }
});