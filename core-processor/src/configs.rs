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

//! Configurations.

use codec::{Decode, Encode};
use gear_core::memory::PageNumber;

const MAX_PAGES: u32 = 512;
const INIT_COST: u64 = 5000;
const ALLOC_COST: u64 = 10000;
const MEM_GROW_COST: u64 = 10000;
const LOAD_PAGE_COST: u64 = 3000;

/// Contextual block information.
#[derive(Clone, Copy, Debug, Encode, Decode, Default)]
pub struct BlockInfo {
    /// Height.
    pub height: u32,
    /// Timestamp.
    pub timestamp: u64,
}

/// Memory/allocation config.
#[derive(Clone, Debug, Decode, Encode)]
pub struct AllocationsConfig {
    /// Max amount of pages.
    pub max_pages: PageNumber,
    /// Cost of initial memory.
    pub init_cost: u64,
    /// Cost of allocating memory.
    pub alloc_cost: u64,
    /// Memory grow cost.
    pub mem_grow_cost: u64,
    /// Load page cost.
    pub load_page_cost: u64,
}

impl Default for AllocationsConfig {
    fn default() -> Self {
        Self {
            max_pages: MAX_PAGES.into(),
            init_cost: INIT_COST,
            alloc_cost: ALLOC_COST,
            mem_grow_cost: MEM_GROW_COST,
            load_page_cost: LOAD_PAGE_COST,
        }
    }
}

/// Execution settings for handling messages.
pub struct ExecutionSettings {
    /// Contextual block information.
    pub block_info: BlockInfo,
    /// Allocation config.
    pub config: AllocationsConfig,
}

impl ExecutionSettings {
    /// New execution settings with default allocation config.
    pub fn new(block_info: BlockInfo) -> Self {
        Self {
            block_info,
            config: Default::default(),
        }
    }

    /// Max amount of pages.
    pub fn max_pages(&self) -> PageNumber {
        self.config.max_pages
    }

    /// Cost of initial memory.
    pub fn init_cost(&self) -> u64 {
        self.config.init_cost
    }

    /// Cost of allocating memory.
    pub fn alloc_cost(&self) -> u64 {
        self.config.alloc_cost
    }

    /// Memory grow cost.
    pub fn mem_grow_cost(&self) -> u64 {
        self.config.mem_grow_cost
    }

    /// Load page cost.
    pub fn load_page_cost(&self) -> u64 {
        self.config.load_page_cost
    }
}
