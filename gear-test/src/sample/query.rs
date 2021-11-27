use serde::{Deserialize, Serialize};

use super::address::Address;
use super::payload::PayloadInput;

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct Query {
    pub actor: Address,
    pub payload: PayloadInput,
}
