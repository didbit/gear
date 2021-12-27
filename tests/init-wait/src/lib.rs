#![cfg_attr(not(feature = "std"), feature(alloc_error_handler))]
#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(feature = "std")]
mod native {
    include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));
}

#[cfg(feature = "std")]
pub use native::{WASM_BINARY, WASM_BINARY_BLOATY};

#[cfg(not(feature = "std"))]
mod wasm {
    include! {"./code.rs"}
}
