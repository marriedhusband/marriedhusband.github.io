/**
 * Comportement de la page article.
 *
 * - boutons imprimer/taille du texte (#widgets)
 * - zoom images (Fancybox)
 * - repositionnement des notes marginales
 *
 * @use Fancybox 1.3.1
 */
(function($) {

    /**
     * Mise en cache des sélections jQuery élémentaires.
     * Module Pattern : http://www.yuiblog.com/blog/2007/06/12/module-pattern/
     */
    var Article = function(){

        var init = function() {
            this.loading   = $('#loading');
            this.widgets   = $('#widgets');
            this.fullText  = $('#text').find('div.text').eq(0);
            this.sideNotes = this.fullText.find('ul.sidenotes');
            this.fullIcon  = this.fullText.find('div.textIcon');
            this.textIcon  = this.fullIcon.add($('#annexe').find('div.text').eq(0).find('div.textIcon'));
        };

        return {
            init : init
        };

    }(), // fonction auto-exécutée,

    /**
     * Widgets (boutons imprimer/taille du texte).
     */
    Widgets = {

        // Tailles de texte disponibles pour le texte intégral.
        // Chaque taille doit correspondre à une classe définie dans la CSS.
        textSize : ['largest', 'large', 'medium'],

        // Taille du texte par défaut
        currentSize : 'medium',

        // Collection de boutons
        buttons : document.createDocumentFragment(),

        // Ajoute un bouton à la collection
        buttonCreate : function(id, title){
            var a = document.createElement('a');
            a.id = id;
            a.href = document.location;
            a.title = translations.strWidget[title];
            if (id.indexOf(this.currentSize) != -1) {
                a.className = 'current';
            }
            this.buttons.appendChild(a);
        },

        init : function(){

            // Bouton Imprimer
            this.buttonCreate('wPrint', 'print');

            // Boutons Taille du texte
            if (Article.widgets.hasClass('withTextSize')) {
                for (var s in this.textSize) {
                    this.buttonCreate('wTextSize-' + this.textSize[s], this.textSize[s]);
                }
            }

            // Insertion dans le DOM
            Article.widgets.append(this.buttons);

            // Ajout des événements
            Article.widgets.delegate('a[id^=wTextSize]', 'click', function(event){
                var size = this.id.replace('wTextSize-', '');
                event.preventDefault();
                $(this).blur().addClass('current').siblings().removeClass('current');
                Article.fullText.removeClass(Widgets.currentSize).addClass(size);
                Widgets.currentSize = size;
                                FixSideNotes();
            });

            Article.widgets.delegate('#wPrint', 'click', function(event) {
                window.print();
                return false;
            });
            // Taille du texte par defaut
            var resizable = $('div.wResizable');
            resizable.addClass(Widgets.currentSize);
            $('a#wTextSize-' + Widgets.currentSize).addClass('current');
        }

    },

    /**
     * Présentation des images.
     */
    TextImages = {

        fancyNav : document.createElement('div'),

        habillage : false,

        init : function(){

            var that = this,
                textWidth = parseInt(Article.fullText.width(), 10);

                        this.habillage = Article.fullText.hasClass('habillage');

            Article.textIcon.each(function(index){

                var icon  = $(this),
                    wrap  = icon.find('div.textIconWrap'),
                    image = icon.find('img')[0],
                    notInAnnexe = index < Article.fullIcon.length;

                // Orientation de l'image, pour positionner les méta
                if (that.habillage && notInAnnexe) {
                    icon.addClass('fancy');
                    //if (image.width <= image.height) {
                    if (image.width / image.height < 1.2) {
                        icon.addClass('portrait');
                        wrap.width(textWidth);
                    } else {
                        icon.addClass('landscape');
                        wrap.width((image.width > textWidth) ? textWidth : image.width);
                    }
                }

                // Liens Agrandir/Original
                icon.find('div.textIconAccess').delegate('a', 'click', function(event){
                    event.preventDefault();
                    this.blur();
                    if (this.className == 'iconOrig') {
                        window.open(this.href);
                    } else {
                        $(image).closest('a').trigger('click');
                    }
                });

                if($('body').hasClass('reader'))
                            icon.find('a.iconZoom').text('');

                // Stockage des metas
                icon.data('meta', that.getMeta(icon));

                // Fancybox
                if (Article.textIcon.length > 1) {
                    that.fancyNavAppend(index);
                }
                that.attachFancybox(icon);

            });

            // Survol
            if (that.habillage) {
                Article.fullText.delegate('div.textIcon', 'mouseenter', function(){
                    $(this).addClass('over');
                }).delegate('div.textIcon', 'mouseleave', function(){
                    $(this).removeClass('over');
                });
            }

            // Done
            if (Article.loading.is(':visible')) {
                Article.loading.fadeOut(1000);
            }

        },

        getMeta : function(textIcon){

            return {
                title : textIcon.find('p.titreillustration').clone(),
                caption : textIcon.find('p.legendeillustration').clone(),
                credits : textIcon.find('p.crditsillustration, p.creditillustration').clone(),
                origLink : textIcon.find('div.textIconAccess').clone(true)
            }

        },

        fancyNavAppend : function(index){

            var a = document.createElement('a'),
                frag = document.createDocumentFragment();

            a.href = '#';
            a.innerHTML = index + 1;
            a.onclick = function(){
                $.fancybox.pos(index);
                return false;
            };

            frag.appendChild(a);
            frag.appendChild(document.createTextNode(' '));

            this.fancyNav.id = 'fancybox-nav';
            this.fancyNav.appendChild(frag);
        },

        attachFancybox : function(textIcon){

            var that = this;

            textIcon.find('a[rel=iconSet]').eq(0).fancybox({
                'autoScale': false,
                'speedIn': 300,
                'speedOut': 300,
                'changeFade': 'fast',
                'changeSpeed': 300,
                'transitionOut': 'none',
                'transitionIn': 'none',
                'overlayColor': '#000',
                'overlayOpacity': 0.6,
                'titlePosition': 'inside',
                'titleFormat': function(title, currentArray, currentIndex, currentOpts){

                    var meta = $('<div/>'),
                        data = textIcon.data('meta');

                    // Construction du bloc titre
                    if (data.origLink) {
                        meta.append(data.origLink);
                    }
                    if (data.title) {
                        meta.append(data.title);
                    }
                    if (data.caption) {
                        meta.append(data.caption);
                    }
                    if (data.credits) {
                        meta.append(data.credits);
                    }

                    // Navigation
                    $('a', that.fancyNav)
                        .removeClass('current')
                        .eq(currentIndex)
                        .addClass('current');

                    meta.addClass('fancy').append(that.fancyNav);

                    return meta;

                },
                'onStart': function(currentArray, currentIndex, currentOpts){
                    textIcon.removeClass('over');
                }
            });

        }

    };

    /**
     * Fix notes marginales.
     * Repositionne les notes marginales pour éviter qu'elles se superposent.
     */
    FixSideNotes = function(){

            var lastNoteIndex = Article.sideNotes.length - 1,
                prevNoteBottom = 0;

            Article.sideNotes.each(function(count){
                if(count == 0) return;

                var self = $(this),
                    selfTop = self.offset().top,
                    diffPos = ($(Article.sideNotes[count - 1]).offset().top + $(Article.sideNotes[count - 1]).height()) - selfTop,
                    prevNoteBottom = selfTop + self.height();

                if(diffPos > 0) {
                    self.css('top', diffPos + 'px');//.css('background', 'pink');
                    prevNoteBottom += diffPos;
                }

                // Dernière note :
                // on ajuste si nécessaire la hauteur de Article.fullText
                if (count == lastNoteIndex) {
                    var textBottom = Article.fullText.offset().top + Article.fullText.height();
                    var diffBottom = prevNoteBottom - textBottom;
                    if (diffBottom > 0) {
                        Article.fullText.css('padding-bottom', diffBottom + 'px');
                    }
                }
            });
    }


    /*
         * On positionne la première note marginales au dessous du bloc de droite si elle chevauche
         */
        FixSideNotes2 = function() {
            if(!Article.sideNotes.length || (!$('#book-buy').length && !$('#book-read').length)) return;

            var last = $('#book-buy').length ? $('#book-buy') : $('#book-read');
            var note = Article.sideNotes[0];
            var top = last.offset().top + last.outerHeight();
            var currentOffset = $(note).offset();
            if((top + 10) > currentOffset.top) {
                Article.sideNotes.each(function(count){ $(this).css('top', 0); });
                $(note).offset({top:top + 10, left: currentOffset.left});
                FixSideNotes();
            }
        };

    /**
     * DOM ready : initialisation des objets disponibles pour la page.
     */
    $(function(){

        Article.init();
        Widgets.init();

        if (Article.fullText.length) {

            // Widgets
            //if (Article.widgets.length) {
            //    Widgets.init();
            //}

            // Fix sidenotes
            if (Article.sideNotes.length) {
                FixSideNotes();
            }

            // Images
            if (Article.textIcon.length) {

                // Création et insertion du raccourci
                var shortcut = $('#shortcuts > a').last();
                shortcut.clone()
                        .html(translations.strArticle.illustrations)
                        .attr('href', "#illustrations")
                                               .attr('title', translations.strArticle.illustrations)
                        .insertAfter(shortcut);

                // Traitement des images
                TextImages.init();
            }

        }
        /**
         * Barre de navigation sur la page article
         */
        (function() {
            if(!$('#book-navigation-first').length || $('body').hasClass('reader')) return;
            $('#book-navigation-first').carouFredSel({
                items:{visible : 20},
                auto:false,
                circular:false,
                infinite:true,
                height:50,
                prev:{button:'#navpage-prev'},
                next:{button:'#navpage-next'},
                pagination:'#book-navigation-second'
            });
            $(window).resize(function() { if($('#book-navigation-bars-second').css('display') != 'none') $('#book-navigation-first').trigger("updateSizes"); });
        })(),
        FixSideNotes2();
    });
})(jQuery);