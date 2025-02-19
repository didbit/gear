// This file is part of Gear.

// Copyright (C) 2021 Gear Technologies Inc.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

//! Gear `export!` macro creates FFI function that returns a pointer to the
//! Wasm memory and the length of the data required to export.
//! It enables, for example, JS applications to get data from Wasm.

#[macro_export]
macro_rules! export {
    ($f:ident -> $val:expr) => {
        #[no_mangle]
        pub unsafe extern "C" fn $f() -> *mut [i32; 2] {
            let buffer = $val.to_string();
            let result = gstd::macros::util::to_wasm_ptr(buffer.as_bytes());
            core::mem::forget(buffer);
            result
        }
    };
}
