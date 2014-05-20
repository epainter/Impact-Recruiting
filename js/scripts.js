(function (e) {
    function t() {
        e(".section-wrap-intro").css({
            "min-height": e(window).height()
        })
    }

    function n(t) {
        var n = t.offset().top;
        e("html,body").animate({
            scrollTop: n
        }, "slow")
    }

    function r() {
        var t = e(".site-header"),
            n = t.outerHeight(),
            r = e(this).scrollTop() + n,
            i = t.find(".menu"),
            s = i.find("a"),
            o = s.map(function () {
                var t = e(e(this).attr("href"));
                if (t.length) return t
            });
        var u = o.map(function () {
            if (e(this).offset().top < r) return this
        });
        u = u[u.length - 1];
        var a = u && u.length ? u[0].id : "";
        s.parent().removeClass("active").end().filter("[href=#" + a + "]").parent().addClass("active")
    }
    e(window).load(function () {
        e("#intro-carousel").waitForImages(function () {
            setTimeout(function () {
                e("#preload").fadeOut(400);
                setTimeout(function () {
                    e("#timer").animate({
                        opacity: 1
                    }, 800)
                }, 1e3)
            }, 400)
        })
    });
    e(document).ready(function () {
        var i = new Date(2014, 5 - 1, 7);
        e("#timer").countdown({
            until: i
        });
        e(".section-wrap").each(function () {
            var t = e(this).attr("data-img-path");
            if (t) e(this).backstretch(t)
        });
        e("#intro-carousel").carousel({
            pause: "false",
            interval: 4e3
        });
        var s = e("#social-toggle"),
            o = e("#social-links"),
            u = o.find("li"),
            a = u.length;
        o.css({
            top: e(".site-header").outerHeight()
        });
        u.each(function (t) {
            e(this).hide().css({
                top: t * (60 + 6),
                left: 0,
                marginLeft: t % 2 === 0 ? -24 : 24
            })
        });
        s.click(function (t) {
            if (s.hasClass("ion-ios7-plus-empty")) {
                u.each(function (t) {
                    e(this).show().animate({
                        opacity: 1,
                        marginLeft: 0
                    }, 300)
                });
                s.removeClass("ion-ios7-plus-empty").addClass("ion-ios7-minus-empty")
            } else {
                u.each(function (t) {
                    e(this).animate({
                        opacity: 0,
                        marginLeft: t % 2 === 0 ? -24 : 24
                    }, 300, function () {
                        e(this).hide()
                    })
                });
                s.removeClass("ion-ios7-minus-empty").addClass("ion-ios7-plus-empty")
            }
            t.preventDefault()
        });
        e("#menu-toggle").click(function (t) {
            e(this).toggleClass("ion-ios7-arrow-thin-down ion-ios7-arrow-thin-up");
            e(".menu").slideToggle();
            t.preventDefault()
        });
        t();
        e("#blog").click(function () {
            window.open("http://impactrecruiting.tumblr.com/")
        });
        e(window).bind("resize orientationchange", function () {
            t();
            e(".section-wrap").backstretch("resize");
            if (e("#menu-toggle").is(":hidden")) {
                e(this).removeClass("ion-ios7-arrow-thin-up").addClass("ion-ios7-arrow-thin-down");
                e(".menu").removeAttr("style")
            }
        });
        e(".menu a, .menu-logo a").click(function (t) {
            var r = e(e(this).attr("href"));
            if (r.length) n(r);
            if (e("#menu-toggle").hasClass("ion-ios7-arrow-thin-up")) {
                e("#menu-toggle").removeClass("ion-ios7-arrow-thin-up").addClass("ion-ios7-arrow-thin-down");
                e(".menu").slideToggle()
            }
            t.preventDefault()
        });

        // Emily edits 

        $("#menu-logo").click(function (t) {
            var r = e(e(this).attr("href"));
            if (r.length) n(r)
        });
        $(".learnmore").click(function (t) {
            var r = e(e(this).attr("href"));
            if (r.length) n(r)
        });
        r();
        e(window).scroll(function () {
            r()
        });

        // Core Values

        e("#accountability").hover(function () {
            e(".accountability").css("opacity", "1")
        }, function () {
            e(".accountability").css("opacity", "0")
        });
        e("#integrity").hover(function () {
            e(".integrity").css("opacity", "1")
        }, function () {
            e(".integrity").css("opacity", "0")
        });
        e("#knowledge").hover(function () {
            e(".knowledge").css("opacity", "1")
        }, function () {
            e(".knowledge").css("opacity", "0")
        });
        e(".retained-block").hover(function () {
            e(".retained-block-bottom").toggleClass("noshow-hidden")
        });
        e(".retained-block-bottom").click(function () {
            e(".retained-block-bottom").toggleClass("noshow-hidden")
        });

        //Crew Bios

        e("#tim").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-tim").toggleClass("noshow"), e(".team-description").not(".team-description-tim").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-tim").toggleClass("noshow")
            }
        });
        e("#phil").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-phil").toggleClass("noshow"), e(".team-description").not(".team-description-phil").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-phil").toggleClass("noshow")
            }
        });
        e("#gp").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-gp").toggleClass("noshow"), e(".team-description").not(".team-description-gp").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-gp").toggleClass("noshow")
            }
        });
        e("#garrett").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-garrett").toggleClass("noshow"), e(".team-description").not(".team-description-garrett").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-garrett").toggleClass("noshow")
            }
        });
        e("#dave").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-dave").toggleClass("noshow"), e(".team-description").not(".team-description-dave").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-dave").toggleClass("noshow")
            }
        });
        e("#jj").click(function () {
            if (e(window).width() > 540) {
                e(".team-description-jj").toggleClass("noshow"), e(".team-description").not(".team-description-jj").addClass("noshow")
            }
            if (e(window).width() < 540) {
                e(".mobile-team-jj").toggleClass("noshow")
            }
        });
        
        e("input, textarea").placeholder();
        e('<div class="loading"></div>').hide().appendTo(".form-wrap");
        e('<div class="success"></div>').hide().appendTo(".form-wrap");
        e("#newsletter-form").validate({
            rules: {
                newsletter_email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                newsletter_email: {
                    required: "Email address is required",
                    email: "Email address is not valid"
                }
            },
            errorElement: "span",
            errorPlacement: function (e, t) {
                e.appendTo(t.parent())
            },
            submitHandler: function (t) {
                e(t).hide();
                e("#newsletter .loading").css({
                    opacity: 0
                }).show().animate({
                    opacity: 1
                });
                e.post(e(t).attr("action"), e(t).serialize(), function (t) {
                    e("#newsletter .loading").animate({
                        opacity: 0
                    }, function () {
                        e(this).hide();
                        e("#newsletter .success").show().html("<p>Thank you for subscribing!</p>").animate({
                            opacity: 1
                        })
                    })
                });
                return false
            }
        });
        e("#contact-form").validate({
            rules: {
                contact_name: "required",
                contact_email: {
                    required: true,
                    email: true
                },
                contact_text: "required"
            },
            messages: {
                contact_name: "Name is required",
                contact_email: {
                    required: "Email address is required",
                    email: "Email address is not valid"
                },
                contact_text: "Message is required"
            },
            errorElement: "span",
            errorPlacement: function (e, t) {
                e.appendTo(t.parent())
            },
            submitHandler: function (t) {
                if (e("#cemail").val() == "") {
                    e(t).hide();
                    e("#contact .loading").css({
                        opacity: 0
                    }).show().animate({
                        opacity: 1
                    });
                    e.post(e(t).attr("action"), e(t).serialize(), function (n) {
                        e("#contact .loading").animate({
                            opacity: 0
                        }, function () {
                            e(this).hide();
                            e("#contact .success").show().html("<p>Thank you for contacting us. Your information has been sent and we should be in touch with you soon.</p>").animate({
                                opacity: 1
                            });
                            setTimeout(function () {
                                e("#contact .success").animate({
                                    opacity: 0
                                }, function () {
                                    e(t).show().animate({
                                        opacity: 1
                                    });
                                    e(this).hide();
                                    e(t).find("#contact_text").val("")
                                })
                            }, 3e3)
                        })
                    })
                }
                return false
            }
        })
    })
})(jQuery)