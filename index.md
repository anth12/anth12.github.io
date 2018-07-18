---
layout: home
title: Home
landing-title: The Pixel Forge
description: Some descrption
image: 
author: 
nav-menu: 
---


<section class="home section image-slider" id="home">
	<div class="home-slider text-center">
		<div class="swiper-wrapper">
			<div class="swiper-slide text-center" style="background: url(/assets/images/reversion-home.jpg);">
				<p class="home-slider-title-icon">
					<img src="/assets/images/anthony.png" alt="Anthony Halliday" />
				</p>
				<div class="slider-panel">
					<h2 class="home-slider-title-main">Anthony Halliday</h2>
					<div class="home-slider-title-small">Senior .NET Developer</div>
				</div>
				<div class="home-buttons text-center">
					<a href="#about" class="btn btn-margin btn-lg  btn-primary">about</a>
					<a href="#contact" class="btn btn-margin btn-lg  btn-success">contact</a>
				</div>
			</div>
			<div class="swiper-slide text-center" style="background: url(/assets/images/made-in-malawi.jpg);">
				<div class="slider-panel">
					<h2 class="home-slider-title-main">Full Stack Development</h2>
					<div class="home-slider-title-small">Web - Mobile - Desktop</div>
				</div>
				<div class="home-buttons text-center">
					<a href="#projects" class="btn btn-margin btn-lg  btn-primary">projects</a>
				</div>
			</div>
			<div class="swiper-slide text-center" style="background: url(/assets/images/tallinja-mobile.jpg);">
			</div>
		</div>
		<div class="home-pagination"></div>
		<div class="home-slider-next right-arrow-negative">
			<span class="ti-arrow-right"></span>
		</div>
		<div class="home-slider-prev left-arrow-negative">
			<span class="ti-arrow-left"></span>
		</div>
	</div>
</section>



<section class="about section" id="about">
	<div class="col-md-12 about-introduction">
		<h2 class="text-center">about me</h2>
		<p class="text-center inverse">
			Experienced Software Developer with a demonstrated history of working in the computer software industry. Skilled in Desktop, App and Web Applications on the .NET stack; MVC, WebApi, WPF, Xamarin forms etc.
		</p>
	</div>
	<div class="container overflow-hidden">
		<div class="row">
			<div class="about-row">
				<div class="col-md-6 about-grid">
					<div class="about-image">
						<img src="/assets/images/tallinja-mobile.jpg" alt="Tallinja but app">
					</div>
				</div>
				<div class="col-md-6 about-grid">
					<div class="about-text-box">
						<h3 class="wow fadeInRight">At the office</h3>
						<p class="wow fadeInRight" data-wow-delay=".4s">
							An enthusiastic, passionate and highly motivated .NET Developer with 6 years industry experience in full stack .NET web development, mobile &amp; systems development. 
						</p>
						<p class="wow fadeInRight" data-wow-delay=".4s">
							Constantly striving to produce the highest quality results whilst developing intuitive, flexible &amp; extensible solutions to meet business requirements.
						</p>
					</div>
				</div>
			</div>
			<div class="about-row">
				<div class="col-md-5 col-md-push-1  about-grid">
					<div class="about-text-box">
						<h3 class="wow fadeInRight">Out the office</h3>
						<p class="wow fadeInRight" data-wow-delay=".4s">
							In my spare time I enjoy learning about the latest development technologies &amp; frameworks, contributing to OS projects, and tinkering with Microcontrollers. <br/><br/>
							An avid year round rock climber, enjoying all variations of the sport from Traditional and Sport climbing, to Dry Tooling and the occasional Winter climb.
							I am also a regular hill walker, mountain biker and during the winter months enjoy Skiing &amp; Snowboarding.
						</p>
					</div>
				</div>
				<div class="col-md-5 col-md-push-1 about-grid">
					<div class="about-image">
						<img src="/assets/images/hobbies.jpg" alt="Anthony rock climbing">
					</div>
				</div>
			</div>
			<!-- <div class="about-row">
				<div class="col-md-4 col-md-push-2 about-grid">
					<div class="about-image">
						<img src="img/about3.jpg" alt="about me photo">
					</div>
				</div>
				<div class="col-md-5 col-md-push-2 about-grid">
					<div class="about-text-box">
						<h3 class="wow fadeInRight">Ssed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
						<p class="wow fadeInRight" data-wow-delay=".4s">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
						</p>
					</div>
				</div>
			</div>
			<div class="about-row">
				<div class="col-md-4 col-md-push-2 about-grid">
					<div class="about-text-box">
						<h3 class="wow fadeInRight">Ssed do eiusmod tempor.</h3>
						<p class="wow fadeInRight" data-wow-delay=".4s">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
					</div>
				</div>
				<div class="col-md-3 col-md-push-2 about-grid">
					<div class="about-image">
						<img src="img/about2.jpg" alt="about me photo">
					</div>
				</div>
			</div> -->
		</div>
	</div>
</section>

{% include tiles.html %}

{% include posts.html %}