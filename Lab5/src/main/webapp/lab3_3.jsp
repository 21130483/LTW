<%--
  Created by IntelliJ IDEA.
  User: phuoc
  Date: 12/7/2023
  Time: 4:24 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">

    <link rel="manifest" href="site.webmanifest">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->


    <meta name="theme-color" content="#fafafa">

    <link rel="stylesheet" href="css/lab3_3.css">
</head>

<body>
<div class="background">
    <div class="table">
        <form method="post" action="index.jsp">
            <div class="sign-in">
                <span>Sign In</span>
            </div>
            <div class="username">
                <input class="input" name="email" placeholder="username or email">
            </div>

            <div class="password">
                <input class="input" name="pass" placeholder="password">
            </div>

            <div class="button-sign-in">
                <button>SIGN IN</button>
            </div>

            <div class="or-login-with">
                <span>Or login with</span>
            </div>

            <div class="facebook-google">
                <div class="fabook">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div class="google">
                    <a href="#">
                        <i class="fa-brands fa-google"></i>
                    </a>
                </div>


            </div>

            <div class="sign-up">
                <button href="#" type="submit">Sign Up</button>
            </div>
        </form>

    </div>
</div>
</body>

</html>
