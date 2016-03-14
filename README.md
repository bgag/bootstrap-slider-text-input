# bootstrap-slider-text-input

This package provides text input fields for [bootstrap-slider](https://github.com/seiyria/bootstrap-slider).
The values are synchronized in both directions.
After losing the focus, the values are validated.
Styles are available to position the input fields left, right and on the bottom.

## Usage

A basic example:

    <div class="form-group">
      <label>input right</label>

        <!-- add the slider-with-input class to the input-group div block -->
        <div class="input-group slider-with-input">
          <input id="slider-right" type="text" data-slider-min="1999" data-slider-max="2016" data-slider-step="1" data-slider-value="2015" data-slider-tooltip="hide"/>

          <!-- the span with the slider-input-* contains the input field -->
          <span class="slider-input-right">
            <input type="text" class="form-control">
          </span>
        </div>
      </div>

      <script>
        $('#slider-right').slider()

        // initializes the input fields
        $('#slider-right').sliderTextInput()
      </script>

The examples.html file contains more examples including ranges and input fields on the bottom, for small columns.
