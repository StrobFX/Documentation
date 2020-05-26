(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{320:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-setup-and-use-the-atomicdex-api-on-an-aws-ec2-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-setup-and-use-the-atomicdex-api-on-an-aws-ec2-instance"}},[t._v("#")]),t._v(" How to Setup and use the AtomicDEX API on an AWS EC2 instance")]),t._v(" "),s("h2",{attrs:{id:"create-the-atomicdex-setup-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-atomicdex-setup-script"}},[t._v("#")]),t._v(" Create the AtomicDEX setup script")]),t._v(" "),s("ul",[s("li",[t._v("Create a file named "),s("code",[t._v("atomicDEX_API_setup.txt")])]),t._v(" "),s("li",[t._v("Copy the code below into the file")]),t._v(" "),s("li",[t._v("In the code, find the text, "),s("code",[t._v("SEED_WORDS_PLEASE_REPLACE")]),t._v(", and replace it with custom seed words of your own\n"),s("ul",[s("li",[t._v("These seed words are used to generate new blockchain addresses, and therefore the seed words should be treated like a unique password")])])]),t._v(" "),s("li",[t._v("Find the text, "),s("code",[t._v("RPC_PASS_PLEASE_REPLACE")]),t._v(", and replace this also with a strong password\n"),s("ul",[s("li",[t._v("This is used to authenticate yourself while communicating with the AtomicDEX API")])])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" jq "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --silent https://api.github.com/repos/KomodoPlatform/atomicDEX-API/releases "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r '."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".assets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" endswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Linux-Release.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(".browser_download_url'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/KomodoPlatform/coins/master/coins\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" *Linux-Release.zip\n./mm2 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("netid"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":9999,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gui"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("aws_cli"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("passphrase"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("SEED_WORDS_PLEASE_REPLACE"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpc_password"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RPC_PASS_PLEASE_REPLACE"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("myipaddr"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),s("h2",{attrs:{id:"install-aws-cli-get-aws-access-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-aws-cli-get-aws-access-credentials"}},[t._v("#")]),t._v(" Install AWS CLI , get AWS access credentials")]),t._v(" "),s("h4",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" awscli\n")])])]),s("p",[t._v("To obtain access credentials, log in to your AWS account and create an IAM user as described in this linked post "),s("a",{attrs:{href:"https://tntdrive.com/where-do-i-get-my-access-keys.aspx#create-iam-user-and-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tntdrive.com/where-do-i-get-my-access-keys.aspx#create-iam-user-and-keys."),s("OutboundLink")],1),t._v(" While following the post, make sure to select the policy "),s("code",[t._v("AmazonEC2FullAccess")]),t._v(" instead of "),s("code",[t._v("AmazonS3FullAccess")]),t._v('. Copy the "Access key ID" and "Secret access key" to another location while completing the post\'s instructions; these are necessary later.')]),t._v(" "),s("p",[t._v("Make sure the SSH directory exists.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/.ssh/\n")])])]),s("h2",{attrs:{id:"create-an-ec2-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-ec2-instance"}},[t._v("#")]),t._v(" Create an EC2 Instance")]),t._v(" "),s("p",[t._v("Open a terminal, navigate to the directory where the file "),s("code",[t._v("atomicDEX_API_setup.txt")]),t._v(" is located, and issue the following commands.")]),t._v(" "),s("p",[t._v("In the terminal commands below, note that you must first change the texts "),s("code",[t._v("REPLACE_ACCESS_KEY_ID")]),t._v(" and "),s("code",[t._v("REPLACE_SECRET_ACCESS_KEY")]),t._v(' with your "Access key ID" and "Secret access key" obtained during the setup procedure. If necessary, also change the region where the EC2 instance is hosted by changing all instances of '),s("code",[t._v("us-east-1")]),t._v(" in the commands.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AWS_ACCESS_KEY_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("REPLACE_ACCESS_KEY_ID\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("AWS_SECRET_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("REPLACE_SECRET_ACCESS_KEY\naws ec2 create-key-pair --region us-east-1 --key-name mm2Keypair "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r .KeyMaterial "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ~/.ssh/mm2.pem\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" ~/.ssh/mm2.pem\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("sgID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("aws ec2 create-security-group --region us-east-1 --group-name sgMM2 --description "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sg-mm2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.GroupId'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\naws ec2 authorize-security-group-ingress --region us-east-1 --group-name sgMM2 --protocol all --cidr "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/0\naws ec2 run-instances --region us-east-1 --image-id ami-083d24fb90054e5f0 --count "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --instance-type t3.micro --key-name mm2Keypair --security-group-ids "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sgID")]),t._v(" --user-data file://atomicDEX_API_setup.txt\n")])])]),s("p",[t._v('If you see an error similar to the following, click the link that is found in the error. On the page to which your browser is directed click the button "Continue to Subscribe" and then click the button "Accept Terms".')]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("An error occurred "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OptInRequired"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" when calling the RunInstances operation: In order to use this AWS Marketplace product you need to accept terms and subscribe. To "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" so please visit https://aws.amazon.com/marketplace/pp?sku"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auhljmclkudu651zy27rih2x2\n")])])]),s("p",[t._v("Wait for the Subscription to be processed and issue the last command again.")]),t._v(" "),s("p",[t._v("Verify that the instance launched successfully by visiting "),s("a",{attrs:{href:"https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Instances:sort=instanceId",target:"_blank",rel:"noopener noreferrer"}},[t._v("this linked page."),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v('From the linked page above, copy the "IPv4 Public IP" of the instance and use it to replace the text '),s("code",[t._v("REPLACE_PUBLIC_IP")]),t._v(" in the following command.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("nodeIp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("REPLACE_PUBLIC_IP\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IdentitiesOnly")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes -i ~/.ssh/mm2.pem admin@"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$nodeIp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'curl -s --url "http://127.0.0.1:7783" --data "{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RPC_PASS_PLEASE_REPLACE"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("version"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("}\"'")]),t._v("\n")])])]),s("p",[t._v("Edit the command above as necessary to exchange one curl command for another from "),s("a",{attrs:{href:"https://developers.atomicdex.io/basic-docs/atomicdex/atomicdex-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("the AtomicDEX API."),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);