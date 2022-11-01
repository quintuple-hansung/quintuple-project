import React, { useState, useEffect } from 'react';
import DownloadImage from '../components/DownloadImage';
import '../styles/main/style.css';
import '../styles/main/bootstrap.min.css';
function Main() {
	return (
		<div>
			<div>
				<div className="header flex-column">
					<div className="shape skew position-absolute h-100 w-100">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="header-content position-relative">
						<div className="container">
							<h1 className="site-name display-2 text-white font-weight-bold">
								ThemeWagon
							</h1>
							<h2 className="header-title text-white">
								HTML5 Template Collection 2019
							</h2>
							<h5 className="header-sub-title mt-2">
								One Hundred Pre-build websites free for commercial use!
							</h5>
							<a
								href="https://themewagon.com/themes/template-collection-2019/"
								className="btn btn-download text-white mt-3 mt-md-5"
								target="_blank">
								<i className="fas fa-cloud-download-alt"></i> Download Free
							</a>
						</div>
					</div>
				</div>

				<div className="container-fluid content py-4 clearfix">
					<nav className="navbar navbar-light navbar-expand bg-light mb-4 p-2 rounded">
						<ul className="navbar-nav">
							<li className="nav-item ">
								<a href="#" className="nav-link active" data-filter="*">
									All Categories
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".admin">
									Admin & Dashboard
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".business">
									Business & Corporate
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".landing">
									Landing Pages
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".ecommerce">
									E-commerce
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".food">
									Food & Restaurant
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" data-filter=".medical">
									Medical & Health Care
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" data-filter=".personal">
									Personal
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" data-filter=".portfolio">
									Portfolio
								</a>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" data-filter=".event">
									Events & Wedding
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									More
								</a>
								<div
									className="dropdown-menu category-list"
									aria-labelledby="navbarDropdown"></div>
							</li>
						</ul>
					</nav>
					<div className="grid">
						<a
							href="http://www.bootstrapdash.com/demo/star-admin-free/jquery/"
							className="admin item"
							target="_blank"
							data-category="Admin &amp; Dashboard">
							<div className="card">
								<div className="card-header text-center">
									<div className="item-name">Star Admin</div>
									<div className="item-category">Admin &amp; Dashboard</div>
								</div>
								<DownloadImage />
							</div>
						</a>
						<a
							href="https://technext.github.io/iconic/"
							className="business item"
							target="_blank"
							data-category="Business &amp; Corporate">
							<div className="card">
								<div className="card-header text-center">
									<div className="item-name">Iconic</div>
									<div className="item-category">Business &amp; Corporate</div>
								</div>
								<DownloadImage />
							</div>
						</a>
						<a
							href="https://technext.github.io/watch/"
							className="ecommerce item"
							target="_blank"
							data-category="E-commerce">
							<div className="card">
								<div className="card-header text-center">
									<div className="item-name">Watch</div>
									<div className="item-category">E-commerce</div>
								</div>
								<DownloadImage />
							</div>
						</a>
					</div>
				</div>
				<footer className="footer w-100">
					<div className="container footer-content">
						<div className="row">
							<div className="col-md-8">
								<h2 className="footer-caption text-primary mb-2 ">
									Ready to get started
								</h2>
								<h3 className="footer-slogan">
									Get the entire collection in your inbox
								</h3>
							</div>
							<div className="col-md-4 text-md-right">
								<a
									href="https://themewagon.com/themes/template-collection-2019/"
									className="btn btn-download px-4 text-white my-3"
									target="_blank">
									<i className="fas fa-cloud-download-alt"></i> Download Free
								</a>
							</div>
						</div>
					</div>
					<hr className="mt-5 mb-4" />
					<div className="text-center my-5 footer-bottom">
						<p>
							Brought to you with love by{' '}
							<a href="https://themewagon.com">ThemeWagon</a>
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Main;
