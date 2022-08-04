use std::vec;

use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{decode,encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
// if we are borrowing a string the type must be &str , if we own the string tyep must be String
pub fn grayscale(encoded_file: &str) -> String{
log(&"Grayscale called".into());

let base64_to_vector = decode(encoded_file).unwrap();
log(&"Image decoded".into());

let mut img = load_from_memory(&base64_to_vector).unwrap();
log(&"Image loaded".into());

 img = img.grayscale();
 log(&"grayscale effect applied".into());

 let mut buffer = vec![];
 img.write_to(&mut buffer, Png).unwrap();
 log(&"new image written".into());

 let encoded_img = encode((&buffer));

 let data_url = format!(
    "data:image/png;base64,{}",
    encoded_img
 );

 return data_url;
}