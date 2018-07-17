---
layout: post
type: work
title: ReVersion
subTitle: Windows desktop application written in WPF with C#
description: ReVersion is a WPF desktop application to assist managing working copies of SVN repositories spread out over multiple SVN servers. ReVersion allows developers working on many different projects, often on multiple servers, the ability to search a single location for the repository they require with the ability to checkout a number of repositories at once to assist setting up new PC's.
image: assets/images/reversion-home.jpg
github: reversion
comments: true
categories: [3]
---

ReVersin is a Windows desktop application written in WPF with C#.

> Do you know where the repository for project X is?

The project came to being after recieving constant requests along the lines of the above, for legacy reasons we use 3 indipendant Subversion servers at work with no way of knowing which server a repository is located on without searching them all manually. Sure we could maintain a list of repositories manually, but who wants to do that when it can be automated?

Supported Svn servers
- Visual Svn
- Submin
- Uber Svn