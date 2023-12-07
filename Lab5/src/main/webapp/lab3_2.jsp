<%--
  Created by IntelliJ IDEA.
  User: phuoc
  Date: 10/27/2023
  Time: 10:47 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/lab3_2.css">
</head>
<body>
<div class="background">
    <form method="post" action="./login">
        <div class="table">
            <div class="6-column">
                <div class="contact-us">
                    <span>Contact Us</span>
                </div>

                <div class="full-name">
                    <span>FULL NAME*</span>
                    <input class="input" type="text" name="name" placeholder="Enter Your Name">
                </div>

                <div class="email-and-phone">
                    <div class="email">
                        <span>EMAIL*</span>
                        <input class="input" type="text" name="email" placeholder="Enter Your Email">
                    </div>

                    <div class="phone">
                        <span>PHONE*</span>
                        <input class="input" type="text" name="phone" placeholder="Enter Your Phone">
                    </div>

                </div>

                <div class="needed-services">
                    <span>NEEDED SERVICES*</span>
                    <input class="input" type="text" name="name" placeholder="Enter Your Name">
                </div>

                <div class="message">
                    <span>MESSAGE*</span>
                    <textarea class="input" rows="4" placeholder="Your message here..."> </textarea>
                </div>

                <div class="submit">
                    <button type="submit">Submit</button>
                </div>

            </div>

        </div>
    </form>
</div>
</body>
</html>
