## Documentation

You can see below the API reference of this module.

### `PixelClass(r, g, b, a)`
A tiny class for pixel manipulation.

#### Params
- **Number|Object** `r`: The *red* value of the pixel (0-255) or an object containing the `r`, `g`, `b`, `a` fields.
- **Number** `g`: The *green* value of the pixel (0-255).
- **Number** `b`: The *blue* value of the pixel (0-255).
- **Number** `a`: The *alpha* (opacity) value of the pixel. If greater then `1`, it will be normalized to a value between `0` and `1`. Defaults
to `1`.

#### Return
- **PixelClass** The `PixelClass` instance.

### `intensity()`
Calculates the pixel intensity.

#### Return
- **Number** The pixel intensity (0-255).

