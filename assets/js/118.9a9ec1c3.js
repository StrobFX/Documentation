(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{348:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"basic-environment-setup-for-linux-vps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-environment-setup-for-linux-vps"}},[e._v("#")]),e._v(" Basic Environment Setup for Linux VPS")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This tutorial provides guidance in creating a simple environment for development in the Komodo ecosystem.")]),e._v(" "),o("p",[e._v("The content herein is not comprehensive. Rather, this content provides a starting point, from which an enthusiastic learner should be capable of customizing and developing their own approach.")]),e._v(" "),o("h2",{attrs:{id:"rent-a-vps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rent-a-vps"}},[e._v("#")]),e._v(" Rent a VPS")]),e._v(" "),o("p",[e._v("A common environment choice among developers is to use a Virtual Private Server (VPS). A VPS allows a developer to use the Internet to access high quality hardware with corporate-level high speed Internet access.")]),e._v(" "),o("p",[e._v("Popular VPS choices include "),o("a",{attrs:{href:"https://aws.amazon.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services (AWS)"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://digitalocean.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("DigitalOcean"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("One reason a VPS is popular is that a developer can quickly create new instances of a virtual machine. This facilitates the developer in having a clean environment that is targeted for a specific purpose.")]),e._v(" "),o("p",[e._v("VPS's are also relatively cheap. Both AWS and DigitalOcean provide the basic necessities for ~$20/month, depending on your desired specifications.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("When using an AWS instance, do not use the free tier's micro t2 instance. This tier does not include enough RAM for blockchain software to function properly. Instead, select a size of at least medium or greater. This will ensure at least 4GB RAM.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Alternatively, you can use your own personal computer, or a bare-metal server. However, troubleshooting on a personal setup can prove to be more time consuming than on a VPS.")])]),e._v(" "),o("h3",{attrs:{id:"recommended-minimum-server-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommended-minimum-server-specifications"}},[e._v("#")]),e._v(" Recommended Minimum Server Specifications:")]),e._v(" "),o("ul",[o("li",[e._v("CPU with 4 cores")]),e._v(" "),o("li",[e._v("8 GB RAM")]),e._v(" "),o("li",[e._v("~100GB SSD\n"),o("ul",[o("li",[e._v("Note that using an HDD instead of a SSD will dramatically increase synchronization time, and thus slow down your workflow")])])]),e._v(" "),o("li",[e._v("Ubuntu version 18.04 (for beginners)\n"),o("ul",[o("li",[e._v("Ubuntu is the most popular Linux distribution")]),e._v(" "),o("li",[e._v("The majority of Komodo's documentation is tested and written on Ubuntu")]),e._v(" "),o("li",[e._v("To learn more about Linux, "),o("a",{attrs:{href:"https://www.linux.com/what-is-linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this linked article"),o("OutboundLink")],1)])])])]),e._v(" "),o("h2",{attrs:{id:"connect-to-your-vps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-your-vps"}},[e._v("#")]),e._v(" Connect to Your VPS")]),e._v(" "),o("p",[e._v("Once you have chosen your VPS provider, you will need to connect to your VPS.")]),e._v(" "),o("p",[e._v("New developers often find this process confusing.")]),e._v(" "),o("p",[e._v("Your VPS provider should have several tutorials available to help you through this process.")]),e._v(" "),o("p",[e._v("Look for tutorials on the following topics.")]),e._v(" "),o("ul",[o("li",[e._v("How to launch a terminal shell on your laptop or desktop machine")]),e._v(" "),o("li",[e._v("How to set up SSH keys for secure login access")]),e._v(" "),o("li",[e._v("How to execute a "),o("code",[e._v("ssh")]),e._v(" command on your local machine to connect to your VPS")]),e._v(" "),o("li",[e._v("How to enter "),o("code",[e._v("sudo")]),e._v(" commands on your VPS")])]),e._v(" "),o("p",[e._v("For example, AWS has the following documentation to assist new developers in accessing VPS's that use the AWS EC2 service. Choose between MacOS & Linux, or Windows, both of which have different tutorial paths.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link to AWS tutorial starting point"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"initial-vps-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initial-vps-setup"}},[e._v("#")]),e._v(" Initial VPS Setup")]),e._v(" "),o("p",[e._v("Once you can access your VPS via the terminal, it is time to consider security in your environment. You are accessing a machine over the Internet, and there are myriad ways by which an attack can compromise your connection.")]),e._v(" "),o("p",[e._v("To ensure your own safety, consider the following security measures.")]),e._v(" "),o("ul",[o("li",[e._v("Never log into your VPS as the root user")]),e._v(" "),o("li",[e._v("Consider disabling the option to log in as root")]),e._v(" "),o("li",[e._v("Use SSH keys to log in, instead of a password")]),e._v(" "),o("li",[e._v("Enable a firewall to limit all unwanted traffic")])]),e._v(" "),o("p",[e._v("The following tutorials provide many useful tips on creating a secure server.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initial Server Setup with Ubuntu 18.04 | Digital Ocean"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using SSH to connect to a remove server"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("For experience learning the Linux environment, consider the following tutorials.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.codecademy.com/learn/learn-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use the Unix command line (interactive course)"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-basics",target:"_blank",rel:"noopener noreferrer"}},[e._v('An Introduction to Linux (Especially "A Culture of Learning")'),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-download-software-and-content-onto-your-linux-vps",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Download Software and Content onto your Linux VPS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-use-cd-pwd-and-ls-to-explore-the-file-system-on-a-linux-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Use cd, pwd, and ls to Explore the File System on a Linux Server"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Add and Delete Users on Ubuntu 16.04"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);