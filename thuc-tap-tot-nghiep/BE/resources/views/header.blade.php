
<!DOCTYPE html>
<html lang="zxx">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Ororus - eCommerce HTML5 Template</title>
    <meta name="description" content="">
    <meta name="robots" content="noindex, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- favicon
    ============================================ -->
    <base href="{{asset('')}}">
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico">

    <!-- CSS files
    ============================================ -->

    <!-- Boostrap stylesheet -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    
    <!-- Icon Font CSS -->
    <link rel="stylesheet" href="assets/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/ionicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/pe-icon-7-stroke.css">
    <link rel="stylesheet" href="http://demo.devitems.com/ororus-v1/assets/css/pe-icon-7-stroke.css">

    <!-- Plugins stylesheet -->
    <link rel="stylesheet" href="assets/css/plugins.css">

    <!-- Master stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Responsive stylesheet -->
    <link rel="stylesheet" href="assets/css/responsive.css">

    <!-- modernizr JS
    ============================================ -->
    <script src="assets/js/modernizr-2.8.3.min.js"></script>
</head>
<body>
    <!-- Start of Whole Site Wrapper with mobile menu support -->
    <div id="whole" class="whole-site-wrapper color-scheme-one">

        @php
        $url = parse_url($_SERVER['REQUEST_URI']);
        @endphp
        @if ($url['path'] == '/') 
            <!-- Start of Newsletter Popup -->
            <div id="newsletter_popup" class="newsletter-popup">
                <div class="popup-container">
                    <div class="popup-close">
                        <span class="p-close"><span>X</span></span>
                    </div> <!-- end of popup-close -->

                    <div class="popup-area text-center">
                        <h2>Subscribe to our Newsletter</h2>
                        <div class="popup-body">
                            <p>Subscribe to the Ororus mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                            <div class="subscribe-form-group">
                                <form action="index.html#">
                                    <input type="text" name="message" id="message" class="form-control" placeholder="Enter your email address" required>
                                    <button type="submit" class="btn btn-secondary">Subscribe</button>
                                </form>
                            </div>
                        </div> <!-- end of popup-body -->

                        <div class="popup-footer">
                            <div class="form-check">
                                <div class="custom-checkbox">
                                    <input class="form-check-input" type="checkbox" id="cancel_popup">
                                    <span class="checkmark"></span>
                                    <label class="form-check-label" for="cancel_popup">Don't show this popup again</label>
                                </div>
                            </div>
                        </div> <!-- end of popup-footer -->
                    </div> <!-- end of popup-area -->
                </div> <!-- end of popup-container -->
            </div>
            <!-- End of Newsletter Popup -->
        @endif
        <!-- Start of Header -->
        <header class="header bgc-white inner-header">
            <div class="header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 align-self-center">
                            <div class="logo">
                                <a href="index.html"><img src="assets/images/logo.png" alt="Logo" class="img-fluid"></a>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-9">
                            <div class="top-header">
                                <div class="row align-items-center">
                                    <div class="col-12 col-sm-12 col-md-7 col-lg-6 order-md-2 order-lg-1">
                                        <div class="top-search">
                                            <p>Trending Search: <a href="login.html#">Headphones</a>, <a href="login.html#">Electronics</a>, <a href="login.html#">Mobile</a>...</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 order-md-1 order-lg-2">
                                        <ul class="list-inline">
                                            <li class="top-links list-inline-item">
                                                <div class="btn-group">
                                                    <button class="btn-link dropdown-toggle">
                                                        My Account <i class="fa fa-angle-down"></i>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="cart.html">Shopping Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="language list-inline-item">
                                                <div class="btn-group">
                                                    <button class="btn-link dropdown-toggle"><img src="assets/images/icons/en-gb.png" alt="Icons"> English <i class="fa fa-angle-down"></i></button>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="login.html#"><img src="assets/images/icons/en-gb.png" alt="Icons"> English</a></li>
                                                            <li><a href="login.html#"><img src="assets/images/icons/fr-fr.png" alt="Icons"> French</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="currency list-inline-item">
                                                <div class="btn-group">
                                                    <button class="btn-link dropdown-toggle"> USD <i class="fa fa-angle-down"></i></button>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="login.html#">€ Euro</a></li>
                                                            <li><a href="login.html#">£ Pound Sterling</a></li>
                                                            <li><a href="login.html#">$ US Dollar</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> <!-- end of top-header -->

                            <div class="bottom-header">
                                <div class="row align-items-center">
                                    <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                                        <div class="header-search-area">
                                            <div class="search-categories">
                                                <form action="login.html#">
                                                    <div class="search-form-input">
                                                        <select id="select" name="select" class="nice-select">
                                                            <option>All Categories</option>
                                                            <option>Gamepad</option>
                                                            <option>Laptop</option>
                                                            <option>Mobile</option>
                                                            <option>Cell Phones</option>
                                                            <option>Phone Cases</option>
                                                            <option>Cell Phones</option>
                                                            <option>SmartWatch</option>
                                                            <option>Tvs</option>
                                                            <option>D-Series TVs</option>
                                                            <option>LED TVs</option>
                                                            <option>OLED TVs</option>
                                                            <option>Video Games</option>
                                                            <option>Controllers</option>
                                                            <option>PC Gamepads</option>
                                                            <option>Xbox 360</option>
                                                            <option>Shop</option>
                                                            <option>Earbud</option>
                                                            <option>Keyboard</option>
                                                            <option>Watches</option>
                                                            <option>Blazers</option>
                                                            <option>Microphones</option>
                                                        </select>
                                                        <div class="search-wrapper">
                                                            <input type="text" placeholder="Search">
                                                            <button class="header-search-btn" type="submit"><i class="ion ion-ios-search"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div> <!-- end of header-search-area -->
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-5 col-lg-5">
                                        <div class="header-cart-area">
                                            <div class="header-cart">
                                                <div class="btn-group">
                                                    <button class="btn-link dropdown-toggle icon-cart">
                                                        <i class="pe-7s-cart"></i>
                                                        <span class="count-style">2</span>
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <div class="shopping-cart-content">
                                                            <ul class="list-unstyled">
                                                                <li class="single-cart-item media">
                                                                    <div class="shopping-cart-img mr-4">
                                                                        <a href="login.html#">
                                                                            <img class="img-fluid" alt="Cart Item" src="assets/images/cart/cart-1.jpg">
                                                                            <span class="product-quantity">1x</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="shopping-cart-title media-body">
                                                                        <h4><a href="login.html#">Donec Ac Tempus</a></h4>
                                                                        <p class="cart-price">$120.00</p>
                                                                        <div class="product-attr">
                                                                            <span>Size: S</span>
                                                                            <span>Color: Black</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="shopping-cart-delete">
                                                                        <a href="login.html#"><i class="ion ion-md-close"></i></a>
                                                                    </div>
                                                                </li>
                                                                <li class="single-cart-item media">
                                                                    <div class="shopping-cart-img mr-4">
                                                                        <a href="login.html#">
                                                                            <img class="img-fluid" alt="Cart Item" src="assets/images/cart/cart-2.jpg">
                                                                            <span class="product-quantity">2x</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="shopping-cart-title media-body">
                                                                        <h4><a href="login.html#">Aliquam Consequat</a></h4>
                                                                        <p class="cart-price">$200.00</p>
                                                                        <div class="product-attr">
                                                                            <span>Color: White</span>
                                                                            <span>Accessories: Yes</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="shopping-cart-delete">
                                                                        <a href="login.html#"><i class="ion ion-md-close"></i></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div class="shopping-cart-total">
                                                                <h4>Sub-Total : <span>$320.00</span></h4>
                                                                <h4>Total : <span>$320.00</span></h4>
                                                            </div>
                                                            <div class="shopping-cart-btn">
                                                                <a class="default-btn" href="cart.html">view cart</a>
                                                                <a class="default-btn" href="checkout.html">checkout</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="header-contact media">
                                                <div class="header-contact-icon mr-4">
                                                    <i class="pe-7s-headphones"></i>
                                                </div>
                                                <div class="header-contact-content media-body">
                                                    <p><span>CALL US NOW:</span> <br><a href="login.html#">+88 123.456.789</a></p>
                                                </div>
                                            </div>
                                        </div> <!-- end of header-cart-area -->
                                    </div>
                                </div>
                            </div> <!-- end of bottom-header -->
                        </div>
                    </div> <!-- end of row -->
                </div> <!-- end of container -->
            </div> <!-- end of header-area -->

            <!-- Start of Main and Mobile Navigation -->
            <div class="main-nav-area">
                <div class="container">
                    <nav id="main_nav" class="stellarnav">
                        <ul class="text-left">
                            <li><a href="index.html"><span>Home</span></a>
                                <ul>
                                    <li><a href="index.html">Home Page 1</a></li>
                                    <li><a href="index-2.html">Home Page 2</a></li>
                                    <li><a href="index-3.html">Home Page 3</a></li>
                                    <li><a href="index-4.html">Home Page 4</a></li>
                                </ul>
                            </li>
                            <li class="mega" data-columns="3"><a href="my-account.html"><span>Pages</span></a>
                                <ul class="mega-container">
                                    <li><a href="my-account.html" class="mega-menu-title"><h3>Inner pages 01</h3></a>
                                        <ul>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="login.html#" class="mega-menu-title"><h3>Inner pages 02</h3></a>
                                        <ul>
                                            <li><a href="cart.html">Cart Page</a><li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="login.html#" class="mega-menu-title"><h3>Inner pages 03</h3></a>
                                        <ul>
                                            <li><a href="compare.html">Product Compare</a></li>
                                            <li><a href="faqs.html">FAQs Page</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="shop-grid.html"><span>Shop Pages</span></a>
                                <ul>
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="shop-list.html">Shop List</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                                    <li><a href="single-product.html">Single Product Page</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html"><span>Blog Pages</span></a>
                                <ul>
                                    <li><a href="blog.html">Blog FullWidth</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html"><span>About Us</span></a></li>
                            <li><a href="contact.html"><span>Contact Us</span></a></li>
                        </ul>
                    </nav>
                </div> <!-- end of container -->
            </div>
            <!-- End of Main and Mobile Navigation -->
        </header>
        <!-- End of Header -->

        <div class="fixed-header-space"></div> <!-- empty placeholder div for Fixed Menu bar height-->