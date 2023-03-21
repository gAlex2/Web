var app = angular.module("myApp",[]);
app.directive("myMenu",function() {
    return {
        template: `<ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="products.html">Products</a></li>
            </ul>`,
        restrict: "A"
    };
});