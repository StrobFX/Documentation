(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{459:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"funding-the-smart-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funding-the-smart-address"}},[t._v("#")]),t._v(" Funding the Smart Address")]),t._v(" "),a("p",[t._v("In order to start trading, you need to fund your smart address.")]),t._v(" "),a("p",[t._v("To find out the smartaddress of a coin, do the "),a("code",[t._v("./getcoin")]),t._v(" api call, after editing it first:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" getcoin\n")])])]),a("p",[t._v("That will show you the following.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("getcoin"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("NAME_OF_COIN"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),a("p",[t._v("Edit the coin name, save and close the file. ("),a("code",[t._v("CTRL-O")]),t._v(" to save, "),a("code",[t._v("CTRL-X")]),t._v(" to close)")]),t._v(" "),a("p",[a("strong",[t._v("IMPORTANT: The smartaddress relies in the passphrase you assign. The smartaddress will not be imported to the wallet, it will stay as")]),t._v(" "),a("code",[t._v("watchonly")]),t._v(" "),a("strong",[t._v(". If you lose the passphrase you lose all addresses of all coins assigned by it.")])]),t._v(" "),a("p",[t._v("Then "),a("strong",[t._v("send transactions in duos")]),t._v(" to your smartaddress provided by "),a("code",[t._v("./getcoin")]),t._v(" (using Hush as an example):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hush-cli sendtoaddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your smartaddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nhush-cli sendtoaddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your smartaddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v("\n")])])]),a("h2",{attrs:{id:"utxo-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxo-pairs"}},[t._v("#")]),t._v(" UTXO PAIRS")]),t._v(" "),a("p",[t._v("To make sure you have utxo pairs for both the bob and alice usage, it is best to send utxo in triplets of X, 1.2 X and 0.01 X. So if X is 10, send 10, 12, and 0.1 coins using sendtoaddress to your smartaddress. This means you will have to send 3 different transactions to the same address with 3 different quantities")]),t._v(" "),a("p",[t._v('If you send coins from a main address using the command line, make sure you either send from an account (sendfrom "account" "address" ) (depends on coin) to the smart address, or send the amounts from small to big: 0.01, then 1.0 and finally 1.2. Otherwise the CLI will send from the smartaddress instead of your other fund address.')]),t._v(" "),a("h2",{attrs:{id:"utxos-explained-by-jl777"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxos-explained-by-jl777"}},[t._v("#")]),t._v(" UTXOs explained by Jl777:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("bob utxo are "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X, X*1.125"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nalice utxo are "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X, X/777"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwith the volume constraints, the bigger the utxo you have the larger offers you can handle\none pair uses "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" actual utxo\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nso maybe it is better to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(", .01, .01\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" alice side pairs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", .01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(", .01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbut all the pairing is automatic and you can see what specific utxos got paired with inventory "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Example:")]),t._v("\nIf you want to fund a komodo smartaddress with 230 komodo, you would need to first send a tx with 100kmd, then another tx with 120 kmd and a third tx with 10kmd.")])])}),[],!1,null,null,null);s.default=n.exports}}]);