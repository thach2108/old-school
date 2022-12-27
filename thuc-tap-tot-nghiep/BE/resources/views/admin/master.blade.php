<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
  <title>Drixo - Responsive Booststrap 4 Admin & Dashboard</title>
  <meta content="Admin Dashboard" name="description">
  <meta content="ThemeDesign" name="author">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <base href="{{asset('')}}">
  <link rel="shortcut icon" href="assets/images/favicon.ico"><!-- ION Slider -->
  <link href="admin_assets/plugins/ion-rangeslider/ion.rangeSlider.css" rel="stylesheet" type="text/css">
  <link href="admin_assets/plugins/ion-rangeslider/ion.rangeSlider.skinModern.css" rel="stylesheet" type="text/css">
  <link href="admin_assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="admin_assets/css/icons.css" rel="stylesheet" type="text/css">
  <link href="admin_assets/css/style.css" rel="stylesheet" type="text/css">
</head>

<body class="fixed-left">
  <!-- Loader -->
  <div id="preloader">
    <div id="status">
      <div class="spinner"></div>
    </div>
  </div><!-- Begin page -->
  <div id="wrapper">


    {{--  --}}
    @include('admin.side-menu') 
    {{--  --}}


    <!-- Start right Content here -->
    <div class="content-page">
    <!-- Start content -->
      <div class="content">
        <!-- Top Bar Start -->
        <div class="topbar">
          <div class="topbar-left	d-none d-lg-block">
            <div class="text-center"><a href="/admin" class="logo"><img src="assets/images/logo.png" height="35"
                  alt="logo"></a></div>
          </div>
          <nav class="navbar-custom">
            <ul class="list-inline float-right mb-0">
              <li class="list-inline-item notification-list dropdown d-none d-sm-inline-block">
                <form role="search" class="app-search">
                  <div class="form-group mb-0"><input type="text" class="form-control" placeholder="Search.."> <button
                      type="submit"><i class="fa fa-search"></i></button></div>
                </form>
              </li>
              <li class="list-inline-item dropdown notification-list"><a class="nav-link dropdown-toggle arrow-none waves-effect"
                  data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false"><i
                    class="mdi mdi-email-outline noti-icon"></i> <span class="badge badge-danger badge-pill noti-icon-badge">5</span></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg">
                  <!-- item-->
                  <div class="dropdown-item noti-title"><span class="badge badge-danger float-right">367</span>
                    <h5>Messages</h5>
                  </div>
                  <div class="slimscroll" style="max-height: 230px;">
                    <!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon"><img src="admin_assets/images/users/user-2.jpg" alt="user-img" class="img-fluid rounded-circle"></div>
                      <p class="notify-details"><b>Charles M. Jones</b><span class="text-muted">Dummy text of the
                          printing and typesetting industry.</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon"><img src="admin_assets/images/users/user-3.jpg" alt="user-img" class="img-fluid rounded-circle"></div>
                      <p class="notify-details"><b>Thomas J. Mimms</b><span class="text-muted">You have 87 unread
                          messages</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon"><img src="admin_assets/images/users/user-4.jpg" alt="user-img" class="img-fluid rounded-circle"></div>
                      <p class="notify-details">Luis M. Konrad<span class="text-muted">It is a long established fact
                          that a reader will</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon"><img src="admin_assets/images/users/user-5.jpg" alt="user-img" class="img-fluid rounded-circle"></div>
                      <p class="notify-details"><b>Kendall E. Walker</b><span class="text-muted">Dummy text of the
                          printing and typesetting industry.</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon"><img src="admin_assets/images/users/user-6.jpg" alt="user-img" class="img-fluid rounded-circle"></div>
                      <p class="notify-details"><b>David M. Ryan</b><span class="text-muted">You have 87 unread
                          messages</span></p>
                    </a></div><!-- All--> <a href="javascript:void(0);" class="dropdown-item notify-all">View All</a>
                </div>
              </li>
              <li class="list-inline-item dropdown notification-list"><a class="nav-link dropdown-toggle arrow-none waves-effect"
                  data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false"><i
                    class="mdi mdi-bell-outline noti-icon"></i> <span class="badge badge-success badge-pill noti-icon-badge">3</span></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg">
                  <!-- item-->
                  <div class="dropdown-item noti-title"><span class="badge badge-danger float-right">84</span>
                    <h5>Notification</h5>
                  </div>
                  <div class="slimscroll" style="max-height: 230px;">
                    <!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-primary"><i class="mdi mdi-cart-outline"></i></div>
                      <p class="notify-details">Your order is placed<span class="text-muted">Dummy text of the printing
                          and typesetting industry.</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-success"><i class="mdi mdi-message"></i></div>
                      <p class="notify-details">New Message received<span class="text-muted">You have 87 unread
                          messages</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-warning"><i class="mdi mdi-martini"></i></div>
                      <p class="notify-details">Your item is shipped<span class="text-muted">It is a long established
                          fact that a reader will</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-danger"><i class="mdi mdi-message"></i></div>
                      <p class="notify-details">New Message received<span class="text-muted">You have 87 unread
                          messages</span></p>
                    </a><!-- item--> <a href="javascript:void(0);" class="dropdown-item notify-item">
                      <div class="notify-icon bg-info"><i class="mdi mdi-martini"></i></div>
                      <p class="notify-details">Your item is shipped<span class="text-muted">It is a long established
                          fact that a reader will</span></p>
                    </a></div><!-- All--> <a href="javascript:void(0);" class="dropdown-item notify-all">View All</a>
                </div>
              </li>
              <li class="list-inline-item dropdown notification-list"><a class="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                  data-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false"><img
                    src="admin_assets/images/users/user-1.jpg" alt="user" class="rounded-circle"></a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown"><a class="dropdown-item"
                    href="index.html#"><i class="mdi mdi-account-circle m-r-5 text-muted"></i> Profile</a> <a class="dropdown-item"
                    href="index.html#"><span class="badge badge-success mt-1 float-right">5</span><i class="mdi mdi-settings m-r-5 text-muted"></i>
                    Settings</a> <a class="dropdown-item" href="index.html#"><i class="mdi mdi-lock-open-outline m-r-5 text-muted"></i>
                    Lock screen</a> <a class="dropdown-item" href="index.html#"><i class="mdi mdi-logout m-r-5 text-muted"></i>
                    Logout</a></div>
              </li>
            </ul>
            <ul class="list-inline menu-left mb-0">
              <li class="list-inline-item"><button type="button" class="button-menu-mobile open-left waves-effect"><i
                    class="ion-navicon"></i></button></li>
            </ul>
            <div class="clearfix"></div>
          </nav>
        </div><!-- Top Bar End -->
        
        {{--  --}}
        @yield('content')
        {{--  --}}


      </div><!-- content -->
      <footer class="footer">© 2018 <b>Drixo</b> <span class="d-none d-sm-inline-block">- Crafted with <i class="mdi mdi-heart text-danger"></i>
        by Themesdesign.</span></footer>
    </div><!-- End Right content here -->
  </div><!-- END wrapper -->
  <!-- jQuery  -->
  <script src="admin_assets/js/jquery.min.js"></script>
  <script src="admin_assets/js/bootstrap.bundle.min.js"></script>
  <script src="admin_assets/js/modernizr.min.js"></script>
  <script src="admin_assets/js/detect.js"></script>
  <script src="admin_assets/js/fastclick.js"></script>
  <script src="admin_assets/js/jquery.slimscroll.js"></script>
  <script src="admin_assets/js/jquery.blockUI.js"></script>
  <script src="admin_assets/js/waves.js"></script>
  <script src="admin_assets/js/jquery.nicescroll.js"></script>
  <script src="admin_assets/js/jquery.scrollTo.min.js"></script><!-- skycons -->
  <script src="admin_assets/plugins/skycons/skycons.min.js"></script><!-- skycons -->
  <script src="admin_assets/plugins/peity/jquery.peity.min.js"></script>
  <!--Morris Chart-->
  <script src="admin_assets/plugins/morris/morris.min.js"></script>
  <script src="admin_assets/plugins/raphael/raphael-min.js"></script><!-- dashboard -->
  <script src="admin_assets/pages/dashboard.js"></script><!-- App js -->
  <script src="admin_assets/js/app.js"></script>
</body>

</html>