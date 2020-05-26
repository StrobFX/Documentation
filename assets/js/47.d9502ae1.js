(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{282:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"komodo-developer-path-create-a-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-create-a-blockchain"}},[e._v("#")]),e._v(" Komodo Developer Path | Create a Blockchain")]),e._v(" "),a("h2",{attrs:{id:"create-a-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-blockchain"}},[e._v("#")]),e._v(" Create a Blockchain")]),e._v(" "),a("h4",{attrs:{id:"estimated-time-10-minutes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-10-minutes"}},[e._v("#")]),e._v(" Estimated Time: 10 minutes")]),e._v(" "),a("p",[e._v("The following tutorial uses the Komodo tutorial docker image to create a blockchain. This tutorial is part of a series.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/overview-of-development-on-komodo-part-0.html"}},[a("b",[e._v("To return to the previous tutorial, click here.")])])],1),e._v(" "),a("h4",{attrs:{id:"select-the-appropriate-tutorial-from-the-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-the-appropriate-tutorial-from-the-menu"}},[e._v("#")]),e._v(" Select the Appropriate Tutorial from the Menu")]),e._v(" "),a("p",[e._v("Begin with the first guided tutorial by selecting "),a("code",[e._v("TUTORIALS")]),e._v(" and then "),a("code",[e._v("TUT1")]),e._v(" from the menu. The following screen should appear. Note the detailed instructions onscreen. You may follow these through the tutorial.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-8.png"}})]),e._v(" "),a("h4",{attrs:{id:"create-a-seed-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-seed-node"}},[e._v("#")]),e._v(" Create a Seed Node")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v("The guided tutorial interface follows these screens:")]),e._v(" "),a("ul",[a("li",[e._v("From the "),a("code",[e._v("SEED-MENU")]),e._v(" select "),a("code",[e._v("SPINUP-SEEDNODE")])])]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-9.png"}})]),e._v(" "),a("ul",[a("li",[e._v("Enter "),a("code",[e._v("1000")]),e._v(" coins as the supply when prompted")]),e._v(" "),a("li",[e._v("Use the "),a("code",[e._v("SEED-GETINFO")]),e._v(" menu item to query the chain's current state\n"),a("ul",[a("li",[e._v("At this time, you will notice that although our "),a("code",[e._v("TUT1")]),e._v(" chain has started, the "),a("code",[e._v("GETINFO")]),e._v(" menu item replies that the chain has "),a("code",[e._v("0")]),e._v(" blocks")]),e._v(" "),a("li",[e._v("This is due to the fact that the chain is still waiting for a mining node to mine blocks")])])])]),e._v(" "),a("p",[e._v("Return to the main "),a("code",[e._v("TUT1")]),e._v(" menu.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-10.png"}})]),e._v(" "),a("h2",{attrs:{id:"create-mining-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-mining-node"}},[e._v("#")]),e._v(" Create Mining Node")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-2"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TUT1")]),e._v(" chain is designed as a blocks-on-demand Smart Chain. This type of chain uses a Proof of Work consensus mechanism for the first 128 blocks, thus forcing the mining of these first blocks, regardless of the number of transactions occurring on the chain. After block 128, the chain stops automatically mining blocks and instead waits until there are a few transactions in the mempool. This style of chain saves computing resources.")]),e._v(" "),a("p",[e._v("For the "),a("code",[e._v("TUT1")]),e._v(" chain these settings are managed within the pre-built docker image. Later, you will learn how to adjust these settings manually.")]),e._v(" "),a("p",[e._v("While the settings of the Smart Chain are set to blocks-on-demand, a node on the network has to indicate a desire to mine for the process to begin. Follow the instructions below to launch a mining node on "),a("code",[e._v("TUT1")]),e._v(".")]),e._v(" "),a("p",[e._v("Go "),a("code",[e._v("BACK")]),e._v(" in the menu until you see the options for both "),a("code",[e._v("SEED-MENU")]),e._v(" and "),a("code",[e._v("MINING-MENU")])]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-3.png"}})]),e._v(" "),a("p",[e._v("Select "),a("code",[e._v("MINING-MENU")]),e._v(", then "),a("code",[e._v("SPINUP-MININGNODE")]),e._v(".")]),e._v(" "),a("p",[e._v("Enter "),a("code",[e._v("1000")]),e._v(" coins as the supply when prompted (we assume here that you entered 1000 coins earlier).")]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("GETINFO")]),e._v(" command to query blockchain state. The chain will still have "),a("code",[e._v("0")]),e._v(" blocks, but should have "),a("code",[e._v("1")]),e._v(" connection. This is the connection to the seed node.")]),e._v(" "),a("h2",{attrs:{id:"start-mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-mining"}},[e._v("#")]),e._v(" Start Mining")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-3"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("ul",[a("li",[e._v("From the "),a("code",[e._v("MINING MENU")]),e._v(" select "),a("code",[e._v("MINING-START")]),e._v(" "),a("ul",[a("li",[e._v("The mining process now begins")]),e._v(" "),a("li",[e._v("Mining the first several blocks requires 30 to 90 seconds")])])]),e._v(" "),a("li",[e._v("From the "),a("code",[e._v("MINING MENU")]),e._v(" select "),a("code",[e._v("MINER-GETMININGINFO")]),e._v(" "),a("ul",[a("li",[e._v("This queries the mining state of both the network and this node")]),e._v(" "),a("li",[e._v("You may see approximately 1.0 solutions per second ("),a("code",[e._v("localsolps")]),e._v(")")]),e._v(" "),a("li",[e._v("You should see the number of blocks increase when you repeat the "),a("code",[e._v("MINER-GETMININGINFO")]),e._v(" menu item")])])])]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-4.png"}})]),e._v(" "),a("h2",{attrs:{id:"validate-an-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-an-address"}},[e._v("#")]),e._v(" Validate An Address")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-4"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v("The guided tutorial in the docker image automatically creates a blockchain address for the user during the startup process.")]),e._v(" "),a("p",[e._v("Typically, when blockchain software creates an address for a user, the address is automatically imported into the user's wallet so that the user can use it.")]),e._v(" "),a("p",[e._v("In these tutorials, however, we generate an address that is not automatically imported. This gives you a chance to import the address yourself under the tutorial guidance.")]),e._v(" "),a("p",[e._v("Make sure that you are still in the "),a("code",[e._v("MINING-MENU")]),e._v(" menu.")]),e._v(" "),a("p",[e._v("Enter the "),a("code",[e._v("WALLET")]),e._v(" section.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-11.png"}})]),e._v(" "),a("ul",[a("li",[e._v("Select "),a("code",[e._v("VALIDATE")]),e._v(" to call the "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/util.html#validateaddress"}},[a("b",[e._v("validateaddress")])]),e._v(" Remote Procedure Call (RPC) method.")],1)]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-12.png"}})]),e._v(" "),a("p",[e._v("The results should be similar to the following.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-5.png"}})]),e._v(" "),a("p",[e._v("Note the "),a("code",[e._v("address")]),e._v(" in the response. This is the address that was generated for this tutorial.")]),e._v(" "),a("p",[e._v("However, note that the "),a("code",[e._v("ismine")]),e._v(" value is "),a("code",[e._v("false")]),e._v(". ("),a("code",[e._v("ismine")]),e._v(' stands for "is mine".)')]),e._v(" "),a("p",[e._v("The private key that was automatically generated by the docker image needs to be imported.")]),e._v(" "),a("h2",{attrs:{id:"import-private-key-for-the-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-private-key-for-the-wallet"}},[e._v("#")]),e._v(" Import Private Key for the Wallet")]),e._v(" "),a("p",[e._v("In the guided tutorials, you do not need to manage the private key directly. However, this is a good time to become familiar with the concept.")]),e._v(" "),a("p",[e._v("A private key could look like the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("E9873D79C6D87DC0FB6A5778633389_SAMPLE_PRIVATE_KEY_DO_NOT_IMPORT_F4453213303DA61F20BD67FC233AA33262\n")])])]),a("p",[e._v('When you enter a private key such as the above into the blockchain software, the automated encryption will match this address with a public key, also called a "pubkey".')]),e._v(" "),a("p",[e._v("A pubkey can look like the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("04fe53c78e36b86aae8082484a4007b706d5678cabb92d178fc95020d4d8dc41ef44cfbb8dfa7a593c7910a5b6f94d079061a7766cbeed73e24ee4f654f1e51904\n")])])]),a("p",[e._v("The public key is the address that receives and holds money. The private key unlocks the address and allows the user to spend money.")]),e._v(" "),a("p",[e._v("Keep the private key private at all times. Never share it - not even with a member of the Komodo team.")]),e._v(" "),a("p",[e._v("To import the private key that was automatically generated for you, select "),a("code",[e._v("WALLET")]),e._v(", then "),a("code",[e._v("IMPORT-DEV-WALLET")]),e._v(".")]),e._v(" "),a("p",[e._v("This automatically executes the "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/wallet.html#importprivkey"}},[a("b",[e._v("importprivkey")])]),e._v(" RPC method, importing the private key and thus the address.")],1),e._v(" "),a("p",[e._v("Now, when funds are sent to this address, your wallet has the keys necessary to spend them.")]),e._v(" "),a("h2",{attrs:{id:"check-the-wallet-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-wallet-balance"}},[e._v("#")]),e._v(" Check the Wallet Balance")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-5"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v("From within the "),a("code",[e._v("WALLET")]),e._v(" menu, select "),a("code",[e._v("BALANCE")]),e._v(".")]),e._v(" "),a("p",[e._v("This automatically executes the "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/wallet.html#getbalance"}},[a("b",[e._v("getbalance")])]),e._v(" RPC method.")],1),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-6.png"}})]),e._v(" "),a("p",[e._v("Note that your wallet has the full "),a("code",[e._v("1000")]),e._v(" coins, and a little extra.")]),e._v(" "),a("p",[e._v("These "),a("code",[e._v("1000")]),e._v(" coins were mined into your address as a reward for mining the first block of the blockchain. This is called the Genesis Block.")]),e._v(" "),a("p",[e._v("The extra fraction of a coin should be of an amount similar to the displayed "),a("code",[e._v(".12532156")]),e._v(" above.")]),e._v(" "),a("p",[e._v("This extra fraction of a coin comes in part as a reward for the blocks mined.")]),e._v(" "),a("p",[e._v("By default, each block mined on a Komodo Smart Chain rewards the miner with "),a("code",[e._v("0.001")]),e._v(" coins.")]),e._v(" "),a("p",[e._v("At the time the screenshot above was taken, the mining node had mined approximately "),a("code",[e._v("125")]),e._v(" blocks, thus accounting for the extra fraction of a coin.")]),e._v(" "),a("h2",{attrs:{id:"list-unspent-transactions-utxos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-unspent-transactions-utxos"}},[e._v("#")]),e._v(" List Unspent Transactions (Utxos)")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-6"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v('The mining node holds the funds. The funds are represented on the blockchain as "unspent transactions," or "utxos."')]),e._v(" "),a("p",[e._v("Utxos can be difficult for a complete beginner to understand.")]),e._v(" "),a("p",[e._v("A utxo is similar in nature to a dollar bill in your physical wallet. You can have many bills in your wallet, and the total amount of bills you have determines your total amount in your wallet.")]),e._v(" "),a("p",[e._v("Likewise, you can have many utxos in your digital wallet, and the total value of all utxos determines the total amount in your digital wallet.")]),e._v(" "),a("p",[e._v("For a full discussion on utxos, "),a("RouterLink",{attrs:{to:"/basic-docs/start-here/core-technology-discussions/miscellaneous.html#the-utxo-an-elusive-yet-fundamental-concept"}},[e._v("turn to the Core Technology Discussions section.")])],1),e._v(" "),a("p",[e._v("In this guided tutorial, we will automatically execute a command that allows us to look at the utxos in our wallet.")]),e._v(" "),a("p",[e._v("Still within the "),a("code",[e._v("WALLET")]),e._v(" submenu, choose the "),a("code",[e._v("LISTUNSPENT")]),e._v(" option. This executes the "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/wallet.html#listunspent"}},[a("b",[e._v("listunspent")])]),e._v(" RPC method. The result should be similar to the following.")],1),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-1-img-7.png"}})]),e._v(" "),a("p",[e._v("The number of utxos here will differ according to the number of blocks your mining node has mined. Each block mined generates a new utxo in your wallet.")]),e._v(" "),a("h2",{attrs:{id:"stop-mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-mining"}},[e._v("#")]),e._v(" Stop Mining")]),e._v(" "),a("h5",{attrs:{id:"estimated-time-1-minute-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-1-minute-7"}},[e._v("#")]),e._v(" Estimated Time: < 1 Minute")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[a("b",[e._v("setgenerate")])]),e._v(" RPC method tells a node to start and stop mining.")],1),e._v(" "),a("p",[e._v("Within the "),a("code",[e._v("MINING")]),e._v(" menu, choose the "),a("code",[e._v("MINING-STOP")]),e._v(" menu item.")]),e._v(" "),a("p",[e._v("The screen will flash and then return to the "),a("code",[e._v("MINING")]),e._v(" menu. This indicates that mining is stopped.")]),e._v(" "),a("p",[e._v("Recall that in this guided tutorial there are only two nodes on the "),a("code",[e._v("TUT1")]),e._v(" blockchain, and that only one of the nodes is a mining node.")]),e._v(" "),a("p",[e._v("As we have stopped the mining node, the blockchain itself is stopped. If we were to attempt to use the other node to send a transaction to the blockchain, no node would mine this transaction, and therefore the transaction would wait indefinitely for confirmation.")]),e._v(" "),a("h2",{attrs:{id:"optional-shut-down-both-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-shut-down-both-nodes"}},[e._v("#")]),e._v(" (Optional) Shut Down Both Nodes")]),e._v(" "),a("p",[e._v("If you would like to exit the tutorial at this time, you may shut down both nodes from within the docker menu.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MINING-MENU")]),e._v(" -> "),a("code",[e._v("SHUTDOWN-NODE-MINER")])]),e._v(" "),a("li",[a("code",[e._v("SEED-MENU")]),e._v(" -> "),a("code",[e._v("SHUTDOWN-NODE-SEED")])])]),e._v(" "),a("p",[e._v("Otherwise, you may proceed with the tutorial series by clicking on the link below.")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-2.html"}},[a("b",[e._v("Link to the next tutorial in this series")])])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);