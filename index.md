---
layout: home
title: Home
landing-title: The Pixel Forge
description: Some descrption
image: 
author: 
nav-menu: 
---

<!-- Banner -->
<section id="banner" class="major">
	<div class="inner">
		<header class="major">
			<h1 class="html-logo">
				<span class="name">
					{{ page.landing-title }}
				</span>
				<span class="dots">
					<div class="dot-1"></div>
					<div class="dot-2"></div>
					<div class="dot-3"></div>
				</span>
			</h1>
		</header>
		<div class="content">
			<p style="text-transform: uppercase;">{{ site.description }}</p>
			<ul class="actions">
				<li><a href="#main" class="button next scrolly">Read On</a></li>
			</ul>
		</div>
	</div>
</section>

<!-- Main -->
<div id="main">

<!-- One -->
{% include tiles.html %}

<!-- Two -->
<section id="two">
	<div class="inner">
		<header class="major">
			<h2>About</h2>
		</header>
		<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
		<ul class="actions">
			<li><a href="about.html" class="button next">Read More</a></li>
		</ul>
	</div>
</section>

</div>

