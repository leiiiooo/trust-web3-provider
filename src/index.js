// Copyright © 2017-2020 Trust Wallet.
//
// This file is part of Trust. The full Trust copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

"use strict";

import TrustWeb3Provider from "./ethereum_provider";
import TrustSolanaWeb3Provider from "./solana_provider";

window.trustwallet = {
  Provider: TrustWeb3Provider,
  SolanaProvider: TrustSolanaWeb3Provider,
  postMessage: null,
};
