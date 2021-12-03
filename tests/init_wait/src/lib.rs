#![cfg_attr(not(feature = "std"), feature(alloc_error_handler))]
#![cfg_attr(not(feature = "std"), feature(const_btree_new))]
#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(feature = "std")]
mod native {
    include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));
}

#[cfg(feature = "std")]
pub use native::{WASM_BINARY, WASM_BINARY_BLOATY};

#[cfg(not(feature = "std"))]
mod wasm {
    include!{"../../../examples/init-wait/src/code.rs"}
}

#[cfg(test)]
#[cfg(feature = "std")]
mod tests {
    use super::{native};
    use common::*;

    #[test]
    fn binary_available() {
        assert!(native::WASM_BINARY.is_some());
        assert!(native::WASM_BINARY_BLOATY.is_some());
    }

    fn wasm_code() -> &'static [u8] {
        native::WASM_BINARY_BLOATY.expect("wasm binary exists")
    }

    #[test]
    fn waiting_program_initialization() {
        let mut runner = RunnerContext::default();

        let report: RunReport<()> = runner.init_program_with_report(wasm_code());
        assert!(matches!(report.result, RunResult::Waiting));
    }
}
