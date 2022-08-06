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

 let encoded_img = encode(&buffer);

 let data_url = format!(
    "data:image/png;base64,{}",
    encoded_img
 );

 return data_url;
}

#[wasm_bindgen]
pub fn flipv(encoded_file: &str) -> String{
   log(&"Flipv called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.flipv();
    log(&"flip effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }

#[wasm_bindgen]
pub fn fliph(encoded_file: &str) -> String{
   log(&"Fliph called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.fliph();
    log(&"flip effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }

#[wasm_bindgen]
pub fn rotate90(encoded_file: &str) -> String{
   log(&"Rotate90 called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.rotate90();
    log(&"Rotate effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }

#[wasm_bindgen]
pub fn rotate180(encoded_file: &str) -> String{
   log(&"Rotate180 called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.rotate180();
    log(&"Rotate effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }


#[wasm_bindgen]
pub fn brighten(encoded_file: &str, value: i32) -> String{
   log(&"Brighten called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.brighten(value);
    log(&"Brighten effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }

#[wasm_bindgen]
pub fn contrast(encoded_file: &str, value: f32) -> String{
   log(&"Contrast called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.adjust_contrast(value);
    log(&"Contrast effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }

#[wasm_bindgen]
pub fn blur(encoded_file: &str, value: f32) -> String{
   log(&"Blur called".into());
   
   let base64_to_vector = decode(encoded_file).unwrap();
   log(&"Image decoded".into());
   
   let mut img = load_from_memory(&base64_to_vector).unwrap();
   log(&"Image loaded".into());
   
    img = img.blur(value);
    log(&"Blur effect applied".into());
   
    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"new image written".into());
   
    let encoded_img = encode(&buffer);
   
    let data_url = format!(
       "data:image/png;base64,{}",
       encoded_img
    );
   
    return data_url;
   }