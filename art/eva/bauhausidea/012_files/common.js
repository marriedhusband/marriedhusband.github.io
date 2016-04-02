var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) || -1 !== window.location.href.indexOf('mobile=1');
var isiPad = (/iPad/i.test(navigator.userAgent));
jQuery(function($) { // DOM ready

	/**
    * Passage d'une box à une autre
    */
    (function(){
        $('div.linker > a').click(function(event) {
            event.preventDefault();
            var id = $(this).attr('id').split('_');
            if(id[1] == 'prev' || id[1] == 'next') {
                var selected = null;
                $('[id^=books_' + id[2] + ']').each(function(index) {
                    if($(this).hasClass('selected')) {
                        selected = index; // on a l'index de l'élément affiché actuellement
                        $(this).removeClass('selected').hide();
                    }
                });
                if(id[1] == 'prev') {
                    if($('[id^=books_' + id[2] + ']')[selected - 1]) {
                        var block = $($('[id^=books_' + id[2] + ']')[selected - 1]);
                        var linker = $($('a[id^=link_'+id[2]+']')[selected - 1]);
                    } else {
                        var block = $('[id^=books_' + id[2] + ']').last();
                        var linker = $('a[id^=link_'+id[2]+']').last();
                    }
                } else {
                    if($('[id^=books_' + id[2] + ']')[selected + 1]) {
                        var block = $($('[id^=books_' + id[2] + ']')[selected + 1]);
                        var linker = $($('a[id^=link_'+id[2]+']')[selected + 1]);
                    } else {
                        var block = $('[id^=books_' + id[2] + ']').first();
                        var linker = $('a[id^=link_'+id[2]+']').first();
                    }
                }
                $('a.selected[id^=link_'+id[2]+']').removeClass('selected');
                linker.addClass('selected');
            } else {
                var block = $('#books_' + id[1] + '_' + id[2]);
                if(block.hasClass('selected')) return; // le bloc affiché est déjà celui sur lequel l'utilisateur a cliqué
                $('[id^=books_' + id[1] + '].selected').hide().removeClass('selected');
                $('a.selected[id^=link_'+id[1]+']').removeClass('selected');
                $(this).addClass('selected');
            }

            block.hide().removeClass('hidden').fadeIn().addClass('selected');
        });
    })(),
    /**
    * Passage d'une box à une autre sur la page de présentation d'un livre
    */
    (function() {
        $('ul.banner > li').click(function(event) {
            event.preventDefault();
            if($(this).hasClass('selected')) return; // déjà sélectionnée

            var id = $(this).attr('id').split('-');
            var prefix = 'book-' + id[1] + '-' + id[2];
            $('div.selected[id^=' + prefix + ']').removeClass('selected').hide();
            $('li.selected[id^=link-' + id[1] + '-' + id[2] + ']').removeClass('selected').children('span.arrow').addClass('hidden');
            $('#' + prefix + '-' + id[3]).hide().removeClass('hidden').fadeIn().addClass('selected');
            $(this).addClass('selected').children('span.arrow').removeClass('hidden');
        });
    })(),
    /**
     * Affichage par onglets
     */
    (function(){
        $('div.resumeMenu').each(function(){
            var self = $(this),
            tabAnchor = self.find('a'),
            tabTarget = self.nextAll('div.resumeContent');
            self.delegate('a', 'click', function(event){
                event.preventDefault();
                if($(this).hasClass('active')) return; // déjà sélectionnée

                tabAnchor.removeClass('active').addClass('inactive');
                tabTarget.hide().removeClass('active').addClass('inactive');
                $(this.hash).removeClass('hidden inactive').fadeIn().addClass('active');
                $(this).removeClass('inactive').addClass('active');
            });
        });
    })(),
    /**
     * Affichage par onglets
     */
    (function(){
        $('div.tabMenu').each(function(){
            var self = $(this),
                tabAnchor = self.find('a'),
                tabTarget = self.nextAll('div.tabContent');

            self.delegate('a', 'click', function(event){
                event.preventDefault();
                if($(this).hasClass('active')) return; // déjà sélectionnée

                tabAnchor.removeClass('active').addClass('inactive');
                tabTarget.hide().removeClass('active').addClass('inactive');
                $(this.hash).removeClass('hidden inactive').fadeIn().addClass('active');
                $(this).removeClass('inactive').addClass('active');
            });
        });
    })(),
    /**
     * Affichage de la description des auteurs
     */
    (function(){
        $('a[id^=link-author]').click(function(event) {
            event.preventDefault();
            $('#link-more-content-aboutauthor').trigger('click');
            var id = $(this).attr('id').split('-');
            $('html, body').animate({
                scrollTop:$('#' + id[1] + '-' + id[2]).offset().top
            }, 'slow');
        });
    })(),
    /**
    * Affichage du résumé
    */
    (function(){
        $('a[id^=link-resume]').click(function(event) {
            event.preventDefault();
            $('#link-more-content-presentationfull').trigger('click');
            var id = $(this).attr('id').split('-');
            $('a[href^=#presentation-' + id[2] + '-' + id[3] + ']').trigger('click');
            $('html, body').animate({
                scrollTop:$('#link-more-content-presentationfull').offset().top
            }, 'slow');
        });
    })(),
    /**
     * Rollover sur les couvertures
     */
    (function(){
        // on active le rollover uniquement si on est pas sur un mobile ou tablette
        if(!isMobile) {
            $('div.booksmodule3.home li.inline-block').hover(function(event) { // hoverIn
                event.preventDefault();
                $(this).css('cursor', 'pointer');
                if(!$(this).children('div.cover').children('a').length) return;
                $(this).children('div.cover').children('a').addClass('hidden');
                $(this).children('div.description').removeClass('hidden');
            },
                                                            function(event) { // hoverOut
                event.preventDefault();
                $(this).css('cursor', 'auto');
                if(!$(this).children('div.cover').children('a').length) return;
                $(this).children('div.description').addClass('hidden');
                $(this).children('div.cover').children('a').removeClass('hidden');
            });
            $('div.booksmodule3.home li.inline-block').click(function(event) {
                event.preventDefault();
                window.location = $(this).children('div.cover').children('a').attr('href');
            });
        }
    })(),
    (function(){
        /**
        * Affichage du bloc suggerer
        */
        $('#link-suggerer').click(function(event) {
            event.preventDefault();
            $('#suggerer-form').removeClass('hidden');
            $('#suggerer-submit').removeAttr('disabled');
            $('#suggerer-message').removeClass('hidden');
            $('#suggerer-message-success').addClass('hidden');
            $('#shadow').hide().removeClass('hidden').show();
            $('#suggerer').hide().removeClass('hidden').fadeIn(300, function(){
                $(this).css('top', $('#suggerer').height() < $(window).height() ? $(window).scrollTop() + (($(window).height() - $('#suggerer').height()) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : $(window).scrollTop() - ($('#suggerer').height() / 2))
            }).addClass('displayed');
            if(typeof Recaptcha != 'undefined') {
                Recaptcha.create(RECAPTCHA_PUBLIC_KEY, 'suggerer-recaptcha', {
                    theme: "red",
                    callback: Recaptcha.focus_response_field}
                );
            }
            return false;
        });
        /**
        * Fermeture du bloc suggerer
        */
        $('#suggerer-close').click(function(event) {
            event.preventDefault();
            $('#shadow').click();
            if(typeof Recaptcha != 'undefined') {
                Recaptcha.destroy();
            }
        });
        /**
        * validation formulaire suggerer
        */
        $('#suggerer-submit').click(function(event) {
            event.preventDefault();
            $(this).attr("disabled", "disabled");
            $('#suggerer-error').text();
            $('#suggerer-error-suggerer-from').text('');
            $('#suggerer-error-affiliation').text('');
            $('#suggerer-error-suggerer-nom_expediteur').text('');
            $('#suggerer-error-recaptcha').text('');
            $('#suggerer-error-coordonnees_etablissement').text('');
            $('#suggerer-error-nom_etablissement').text('');
            $.ajax({
                url: $('#suggerer-form').attr('action'),
                cache: false,
                type: 'POST',
                dataType:'json',
                data:{'norecordurl':1,'id':$('#suggerer-id').val(),'suggerer-affiliation':$('#suggerer-affiliation').val(), 'suggerer-from':$('#suggerer-from').val(),'suggerer-nom_expediteur':$('#suggerer-nom_expediteur').val(),'suggerer-comment':$('#suggerer-comment').val(),'suggerer-nom_etablissement':$('#suggerer-nom_etablissement').val(),'suggerer-coordonnees_etablissement':$('#suggerer-coordonnees_etablissement').val(),'g-recaptcha-response':grecaptcha.getResponse(recaptcha_biblio)},
                'error':function(jqXHR, textStatus, errorThrown) {
                    $('#suggerer-error').text('Sorry, an internal error occured.');
                    if(typeof Recaptcha != 'undefined') Recaptcha.reload();
                    $('#suggerer-submit').removeAttr('disabled');
                },
                'success':function(data, textStatus, jqXHR) {
                    $('#suggerer-submit').removeAttr('disabled');
                    if(data==null) {
                        $('#suggerer-form').addClass('hidden');
                        $('#suggerer-message').addClass('hidden');
                        $('#suggerer-message-success').removeClass('hidden');
                    } else {
                        if(data.errors) {
                            for(i in data.errors) {
                                $('#suggerer-error-' + i).text(translations.strTools.suggerer_errors[i]);
                            }
                            if(typeof Recaptcha != 'undefined') Recaptcha.reload();
                        }
                    }
                    $(window).scrollTop($('#suggerer').offset().top);
                }
            });
        });
    })(),
    /**
    * Affichage du bloc citation/partager/acces
    */
    (function(){
        $('a[id^=link-access]').click(function(event) {
            event.preventDefault();
            var thisId = $(this).attr('id').split('-')[1];
            if($('#access').length) {
                $('#shadow').hide().removeClass('hidden').show();
                $('#' + thisId).hide().removeClass('hidden').fadeIn(300).addClass('displayed').css('top', $('#' + thisId).height() < $(window).height() ? $(window).scrollTop() + (($(window).height() - $('#' + thisId).height()) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : $(window).scrollTop());
                return false;
            }
            $.ajax({
                'url': window.location.protocol + '//' + window.location.hostname + window.location.pathname + '?format=noaccess',
                'type' : 'GET',
                'error':function(jqXHR, textStatus, errorThrown) {
                },
                'success':function(data, textStatus, jqXHR) {
                    if(!data) return;
                    $(data).insertAfter('#share');
                    $('#shadow').hide().removeClass('hidden').show();
                    $('#' + thisId).hide().removeClass('hidden').fadeIn(300).addClass('displayed').css('top', $('#' + thisId).height() < $(window).height() ? $(window).scrollTop() + (($(window).height() - $('#' + thisId).height()) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : $(window).scrollTop());
                    $('#access-close').click(function(event) {
                        event.preventDefault();
                        if(typeof _noCloseShadow === 'undefined' || !_noCloseShadow) $('#shadow').click();
                        else $('#access').hide().removeClass('displayed');
                    });
                    $('#access-link-suggerer').click(function(e) {
                        e.preventDefault();
                        _noCloseShadow = true;
                        $('#access-close').click();
                        $('#link-suggerer').click();
                        _noCloseShadow = false;
                        return false;
                    });
                }
            });
            return false;
        });
        $('a[id^=link-cite]').click(function(event) {
            event.preventDefault();
            $('#shadow').hide().removeClass('hidden').show();
            var thisId = $(this).attr('id').split('-')[1];
            $('#' + thisId).hide().removeClass('hidden').fadeIn(300).addClass('displayed').css('top', $('#' + thisId).height() < $(window).height() ? $(window).scrollTop() + (($(window).height() - $('#' + thisId).height()) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : $(window).scrollTop());
        });
        $('#link-share').click(function(event) {
            event.preventDefault();
            $('#shadow').hide().removeClass('hidden').show();
            $('#share').hide().removeClass('hidden').fadeIn(300).addClass('displayed').css('top', $('#share').height() < $(window).height() ? $(window).scrollTop() + (($(window).height() - $('#share').height()) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : $(window).scrollTop());
            if(typeof Recaptcha != 'undefined') {
                Recaptcha.create(RECAPTCHA_PUBLIC_KEY, 'recaptcha', {
                    theme: "red",
                    callback: Recaptcha.focus_response_field}
                );
            }
            $('a[id^=share-embed-size-]').click(function(event) {
                event.preventDefault();
                if($(this).hasClass('selected')) return;
                var size = $(this).attr('id').split('-')[3];
                if(size == 'small'){
                    var w = 500;
                    var h = 375;
                } else if(size == 'medium') {
                    var w = 800;
                    var h = 600;
                } else if (size == 'large') {
                    var w = 1024;
                    var h = 768;
                }
                $('#input-share-embed').text($('#input-share-embed').text().replace(/width="\d+"/, 'width="' + w + '"').replace(/height="\d+"/, 'height="' + h + '"'));
                $('a.selected[id^=share-embed-size-]').removeClass('selected');
                $(this).addClass('selected');
            });
        });
        /**
        * validation formulaire suggerer
        */
        $('#share-submit').click(function(event) {
            event.preventDefault();
            $(this).attr("disabled", "disabled");
            $('#share-error').text('');
            $('#error-from').text('');
            $('#error-to').text('');
            $('#error-recaptcha').text('');
            $.ajax({
                url: $('#share-form').attr('action'),
                cache: false,
                type : 'POST',
                dataType:'json',
                data:{'norecordurl':1,'id':$('#share-id').val(),'from':$('#from').val(),'to':$('#to').val(),'nom_expediteur':$('#nom_expediteur').val(),'message':$('#message').val(),'g-recaptcha-response':grecaptcha.getResponse(recaptcha_user)},
                success:function(data, textStatus, jqXHR) {
                    $('#share-submit').removeAttr('disabled');
                    if(data==null) {
                        $('#share-message-success').removeClass('hidden');
                        $('#share-form').addClass('hidden');
                    } else {
                        if(data.errors) {
                            for(i in data.errors) {
                                $('#error-' + i).text(translations.strTools.suggerer_errors[i]);
                            }
                        }
                    }
                    if($('body').hasClass('reader')) {
                        $('#link-share-mail').click();
                    } else {
                        $(window).scrollTop($('#share').offset().top);
                    }
                    if(typeof Recaptcha != 'undefined') Recaptcha.reload();
                },
                error:function(jqXHR, textStatus, errorThrown) {
                    $('#share-error').text('Sorry, an internal error occured.');
                    if(typeof Recaptcha != 'undefined') Recaptcha.reload();
                    $('#share-submit').removeAttr('disabled');
                },
                complete:function(jqXHR, textStatus){
                   console.log('complete');
                }
            });
        });
    })(),
    /**
    * Fermeture du bloc citation/partager/acces
    */
    (function(){
        $('#shadow').click(function(event) {
            var f = function(){$('#shadow').hide()};
            if($('#share').hasClass('displayed')) {
                $('#share').fadeOut(200, f).removeClass('displayed');
            } else if($('#cite').hasClass('displayed')) {
                $('#cite').fadeOut(200, f).removeClass('displayed');
            } else if($('#suggerer').hasClass('displayed')) {
                $('#suggerer').fadeOut(200, f).removeClass('displayed');
            } else if($('#access').hasClass('displayed')) {
                $('#access').fadeOut(200, f).removeClass('displayed');
            }
        });
        $('#cite-close').click(function(event) {
            event.preventDefault();
            $('#shadow').click();
        });
        $('#share-close').click(function(event) {
            event.preventDefault();
            $('#shadow').click();
            if(typeof Recaptcha != 'undefined') {
                Recaptcha.destroy();
            }
        });
    })(),
    /**
        * Affichage des blocs de citation
        */
    (function(){
        $('a[id^=link-citation]').click(function(event) {
            event.preventDefault();
            if($(this).hasClass('current')) return; // déjà le bloc affiché

            var id = $(this).attr('id').split('-');
            $('a.current[id^=link-citation-' + id[2] + ']').removeClass('current');
            $('div.current[id^=citation-' + id[2] + ']').removeClass('current').hide();
            $(this).addClass('current');
            $('#citation-' + id[2] + '-' + id[3]).hide().removeClass('hidden').addClass('current').fadeIn();
        });
    })(),
    /**
        * Affichage des blocs de suggestion
        */
    (function(){
        $('a[id^=link-share-]').click(function(event) {
            event.preventDefault();
            if($(this).hasClass('current')) return; // déjà le bloc affiché

            var id = $(this).attr('id').split('-');
            $('a.current[id^=link-share-]').removeClass('current');
            $('div.current[id^=share-]').removeClass('current').hide();
            $(this).addClass('current');
            if(id[2] == 'mail') {
                $('#share-form').removeClass('hidden');
                $('#share-message-success').addClass('hidden');
                $('#share-error').text('');
                $('#error-from').text('');
                $('#error-to').text('');
                $('#error-recaptcha').text('');
            }
            $('#share-' + id[2]).hide().removeClass('hidden').addClass('current').fadeIn(200, function(){
                var sh = $('#share').height();
                var wh = $(window).height();
                var wst = $(window).scrollTop();
                if(sh > wh || sh + $('#share').offset().top > wh + wst) {
                    $('#share').css('top', sh < wh ? wst + ((wh - sh) / 2) - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0) : (wst - ($('#main').css('position') == 'relative' ? $('#main').offset().top : 0)));
                }
            });
        });
        $('#input-share-url').focus(function(event) {
            $(this).select();
        });
        $('#input-share-embed').focus(function(event) {
            $(this).select();
        });
    })(),
    /**
     * Affichage/masquage des collections dans la barre de nav
     */
    (function() {
        $('a[href=#navBooksCollections]').click(function(event) {
            event.preventDefault();
            if(!$(this).hasClass('displayed')) {
                $(this).parent().parent().children('li.hidden').hide().removeClass('hidden').addClass('displayed').fadeIn();
                this.txt = $(this).html();
                $(this).html(translations.strTools.reduire).addClass('displayed');
            } else {
                $(this).parent().parent().children('li.displayed').fadeOut().removeClass('displayed').addClass('hidden');
                $(this).html(this.txt).removeClass('displayed');
            }
        });
    })(),
    /**
     * Appui bouton escape pour fenêtre #cite, #share, #suggerer
     */
    (function() {
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                if($('#cite').hasClass('displayed')) {
                    $('#cite-close').click();
                }
                if($('#share').hasClass('displayed')) {
                    $('#share-close').click();
                }
                if($('#suggerer').hasClass('displayed')) {
                    $('#suggerer-close').click();
                }
            }
        });
    })();
    /**
     * Vérification de la dispo des pdf/epub
     */
    var pdfepubStatus = function() {
        var waiting = $('#book-access .waiting');
        if(!waiting.length) {
            if(interval) interval = clearInterval(interval);
            return;
        }
        waiting.each(function() {
            var self = $(this);
            if(self.hasClass('epub')) {
                var f = 'epub';
            } else {
                var f = 'pdf';
            }
            $.ajax({
                'url': window.location.protocol + '//' + window.location.hostname + window.location.pathname + '?format=pdfepubstatus&f=' + f + '&norecordurl=1&id_=' + self.attr('id').split('-')[2],
                'cache': false,
                'error':function(jqXHR, textStatus, errorThrown) {
                },
                'success':function(data, textStatus, jqXHR) {
                    if(!data) return;
                    self.replaceWith(data);
                }
            });
        });
    };

    var interval = setInterval(pdfepubStatus, 10000);
    
    if((/iPhone|iPad|iPod/i.test(navigator.userAgent) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(navigator.userAgent) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1)) {
    	$.getScript(staticUrl + '/js/iOS-Orientationchange-Fix/ios-orientationchange-fix.js');
    }
});

/**
 * Hauteur de #main en fonction de celle de #nav
 */
var hMain = $('#main').height();
var hNav = $('#nav').height() + $('#logos').height();
if (hNav > hMain) $('#main').height(hNav + 90);
