# jquery-autocompleter
A jQuery plugin autocomplete





## Installation
```code
	composer require gozoro/jquery-autocompleter
```

## Usage
-----

**Using an variant array**

```html
	<input id="autocompleter" name="city" type="text" class="form-control"  value=""/>
	<script>
		$(document).ready(function()
		{
			var variants = ["Moscow", "Pekin", "London", "Paris", "Tokyo"];

			$("#autocompleter").autocompleter(variants, [] );
		});
	</script>';
```


**Using AJAX**

```html
	<input id="autocompleter" name="city" type="text" class="form-control"  value=""/>
	<script>
		$(document).ready(function()
		{
			var variants = "variants.php"; // script must be returns JSON with an variant array

			$("#autocompleter").autocompleter(variants, [] );
		});
	</script>';
```

## Options

- **maxResults:**
Maximum number of suggestions (0 - no limits). Default value is 0.

- **maxResults:**
Maximum number of suggestions (0 - no limits). Default value is 0.

- **minChars:**
Minimum number of characters for the suggestions. Default value is 1.

- **timeout:**
Keyboard input timeout. Default value is 500 ms.

- **matchRegexp:**
Function must be returns a regexp-object used for filtering.
Default value:
```javascript
	function(value, escape)
	{
		return RegExp(escape(value), 'i'); // escape - string escape function
	}
```

- **matchValue:**
Function must be returns a value used for filtering.
Default value:
```javascript
	function(item, index)
	{
		return item;
	}
```

- **itemDisplay:**
Function must be returns a value used for display a suggestions.
Default value:
```javascript
	function(item, index)
	{
		return item;
	}
```

- **itemValue:**
You can set a function returns a value for the request. Default value is "matchValue".

- **emptyValue:**
Empty value when itemValue is used.

- **ajaxData:**
Function must be returns default ajax-request data.
Default value:
```javascript
	function(value)
	{
		return {value:value};
	}
```

- **hiddenValue:**
Default value for the hidden input. Default value is "".