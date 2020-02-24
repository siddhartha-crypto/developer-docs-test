(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{325:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"multisignature-transaction-creation-and-walkthrough"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multisignature-transaction-creation-and-walkthrough"}},[a._v("#")]),a._v(" Multisignature Transaction Creation and Walkthrough")]),a._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[a._v("Multisignature (multisig) is a technology used to increase the number of signatures required for a transaction from an address. This provides an additional layer of security to cryptocurrency transactions.")]),a._v(" "),s("p",[a._v("In this guide we demonstrate the creation and usage of a "),s("code",[a._v("2of2")]),a._v(" multisignature wallet. We use two nodes with the KMD main chain.")]),a._v(" "),s("p",[a._v("To accomplish the same task on another Komodo Smart Chain, add "),s("code",[a._v("-ac_name=NAMEOFCHAIN")]),a._v(" to each command.")]),a._v(" "),s("h2",{attrs:{id:"get-a-new-address-public-key-and-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-new-address-public-key-and-private-key"}},[a._v("#")]),a._v(" Get a New Address, Public Key, and Private Key")]),a._v(" "),s("p",[a._v("Create addresses on two nodes. We will combine these two addresses into a single multisig address.")]),a._v(" "),s("h2",{attrs:{id:"node-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-one"}},[a._v("#")]),a._v(" Node One")]),a._v(" "),s("h4",{attrs:{id:"generate-a-new-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-address"}},[a._v("#")]),a._v(" Generate a New Address")]),a._v(" "),s("h5",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./komodo-cli getnewaddress\n")])])]),s("h5",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("h4",{attrs:{id:"get-the-public-key-using-validateaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-public-key-using-validateaddress"}},[a._v("#")]),a._v(" Get the Public Key Using validateaddress")]),a._v(" "),s("h5",{attrs:{id:"command-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-2"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli validateaddress RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("h5",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isvalid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptPubKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"76a91431a8cbc716e21238079729d46cb655ae7fadc9e388ac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"segid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("37")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ismine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iswatchonly"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isscript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"pubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iscompressed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"account"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"get-the-private-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-private-key"}},[a._v("#")]),a._v(" Get the Private Key")]),a._v(" "),s("h5",{attrs:{id:"command-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-3"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli dumpprivkey RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("h5",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DO_NOT_USEBnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\n")])])]),s("h4",{attrs:{id:"a-summarization-of-data-from-node-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-summarization-of-data-from-node-one"}},[a._v("#")]),a._v(" A Summarization of Data from Node One")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# address: RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n# pubkey:  02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26\n# privkey: UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\n")])])]),s("h2",{attrs:{id:"node-two"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-two"}},[a._v("#")]),a._v(" Node Two")]),a._v(" "),s("p",[a._v("Follow the same steps.")]),a._v(" "),s("h4",{attrs:{id:"generate-a-new-address-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-address-2"}},[a._v("#")]),a._v(" Generate a New Address")]),a._v(" "),s("h5",{attrs:{id:"command-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-4"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli getnewaddress\n")])])]),s("h5",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("h4",{attrs:{id:"get-the-pubkey-value-using-validateaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-pubkey-value-using-validateaddress"}},[a._v("#")]),a._v(" Get the Pubkey Value Using validateaddress")]),a._v(" "),s("h5",{attrs:{id:"command-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-5"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli validateaddress RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("h5",{attrs:{id:"response-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isvalid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptPubKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"76a9141c0f1c482d38c43bb847506a527521d2204afe6588ac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"segid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("38")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ismine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iswatchonly"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isscript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"pubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iscompressed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"account"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"get-the-private-key-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-private-key-2"}},[a._v("#")]),a._v(" Get the Private Key")]),a._v(" "),s("h5",{attrs:{id:"command-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-6"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli dumpprivkey RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("h5",{attrs:{id:"response-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-6"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\n")])])]),s("h4",{attrs:{id:"summarization-of-data-from-node-two"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summarization-of-data-from-node-two"}},[a._v("#")]),a._v(" Summarization of Data From Node Two")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("address: RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\npubkey:  032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816\nprivkey: UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\n")])])]),s("h2",{attrs:{id:"create-a-multisig-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-multisig-address"}},[a._v("#")]),a._v(" Create a Multisig Address")]),a._v(" "),s("p",[a._v("Combine the pubkeys to create a "),s("code",[a._v("2of2")]),a._v(" multisig address.")]),a._v(" "),s("p",[a._v("A "),s("code",[a._v("2of2")]),a._v(" address requires that both addresses sign for every transaction.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("You can customize the signature requirements for essentially any combination. For example, you can make a "),s("b",[a._v("3of5")]),a._v(" multisig address that requires "),s("b",[a._v("3")]),a._v(" of "),s("b",[a._v("5")]),a._v(" available addresses for each transaction.")])]),a._v(" "),s("p",[a._v("Execute the following command on either node. The command returns the "),s("code",[a._v("redeemScript")]),a._v(" json object, which is required to spend funds.")]),a._v(" "),s("h5",{attrs:{id:"command-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-7"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli createmultisig "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'["02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26","032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816"]\'')]),a._v("\n")])])]),s("h5",{attrs:{id:"response-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-7"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bEP3HK73CboW8tGN8obyHUQteBzYjFzgNm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"redeemScript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"fund-the-multisig-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fund-the-multisig-address"}},[a._v("#")]),a._v(" Fund the multisig Address")]),a._v(" "),s("p",[a._v("Fund the multisig address.")]),a._v(" "),s("p",[a._v("(You may use either node.)")]),a._v(" "),s("h5",{attrs:{id:"command-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-8"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli sendtoaddress bEP3HK73CboW8tGN8obyHUQteBzYjFzgNm "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7.77")]),a._v("\n")])])]),s("h5",{attrs:{id:"response-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-8"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c\n")])])]),s("h2",{attrs:{id:"create-the-raw-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-raw-transaction"}},[a._v("#")]),a._v(" Create the Raw Transaction")]),a._v(" "),s("p",[a._v("As input we use the unspent vout of the transaction used to create the multisig address. We also place our desired target destination address in the transaction.")]),a._v(" "),s("p",[a._v("In this example, we send the full "),s("code",[a._v("7.77")]),a._v(" sum to the destination address.")]),a._v(" "),s("p",[a._v('If you do not want to send the full amount, you must manually specify the "change" address and state how much of the change you desire to keep.')]),a._v(" "),s("p",[a._v("Recall that any amount taken from the initial utxo and not included in either the destination address, or in the change address, will automatically be given to the miners as a mining fee.")]),a._v(" "),s("h5",{attrs:{id:"command-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-9"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli createrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{\"RP81MSVu39QgXhGDHfnk9d9KMnp4vhEVBu\":7.77}'")]),a._v("\n")])])]),s("h5",{attrs:{id:"response-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-9"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f190100000000ffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000\n")])])]),s("h2",{attrs:{id:"sign-the-raw-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-the-raw-transaction"}},[a._v("#")]),a._v(" Sign the Raw Transaction")]),a._v(" "),s("p",[a._v("Sign the raw transaction using both nodes.")]),a._v(" "),s("h2",{attrs:{id:"sign-using-node-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-using-node-one"}},[a._v("#")]),a._v(" Sign Using Node One")]),a._v(" "),s("h5",{attrs:{id:"command-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-10"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli signrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f190100000000ffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1,"scriptPubKey":"a914121cbc7a828772bd4612bc7b9765cbbf13d0b3cc87","redeemScript":"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae","amount":7.77}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[\"UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\"]'")]),a._v("\n")])])]),s("h5",{attrs:{id:"response-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-10"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f19010000009200483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"complete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"txid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"vout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptSig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sequence"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4294967295")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Operation not valid with the current stack size"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"sign-using-node-two"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-using-node-two"}},[a._v("#")]),a._v(" Sign Using Node Two")]),a._v(" "),s("p",[a._v("Use the hex value from node one, but change the privkey to the privkey of node two's address.")]),a._v(" "),s("h5",{attrs:{id:"command-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-11"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli signrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f19010000009200483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1,"scriptPubKey":"a914121cbc7a828772bd4612bc7b9765cbbf13d0b3cc87","redeemScript":"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae","amount":7.77}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[\"UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\"]'")]),a._v("\n")])])]),s("h5",{attrs:{id:"response-11"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-11"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language-JSON extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f1901000000da00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147304402200abc8c1e1e26090a7012df8859a3986229da34b0edd82c42a64efc8b89390e6702202582cbdce3de13fe59196228d4d0a6a80916e23ccb343f1cf32515688a938ebb0147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"complete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"broadcast-the-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-the-transaction"}},[a._v("#")]),a._v(" Broadcast the transaction")]),a._v(" "),s("p",[a._v("Broadcast the raw hex to finish send the transaction.")]),a._v(" "),s("h5",{attrs:{id:"command-12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-12"}},[a._v("#")]),a._v(" Command")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./komodo-cli sendrawtransaction 0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f1901000000da00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147304402200abc8c1e1e26090a7012df8859a3986229da34b0edd82c42a64efc8b89390e6702202582cbdce3de13fe59196228d4d0a6a80916e23ccb343f1cf32515688a938ebb0147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000\n")])])]),s("h5",{attrs:{id:"response-12"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-12"}},[a._v("#")]),a._v(" Response")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("23c2aaaf458ada3f171ee5d274e8dcfc91b62099ec15e4b2d02da2b2d1172cb1\n")])])]),s("p",[a._v("The above is the output txid which can be used in an online KMD block explorer to verify the transaction.")]),a._v(" "),s("h2",{attrs:{id:"useful-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[a._v("#")]),a._v(" Useful Links")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@decker.komodo/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B5%D0%B9-multisig-%D0%B2-komodo-9d8f8c48da52",target:"_blank",rel:"noopener noreferrer"}},[a._v("Detailed Article in the Russian Language"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://deckersu.github.io/coinbin/#newMultiSig",target:"_blank",rel:"noopener noreferrer"}},[a._v("Multisig Web Tool"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);