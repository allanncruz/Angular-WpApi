import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    ngOnInit() {
        setTimeout(() => {
            $('.owl-carousel.banner').owlCarousel({
                loop: true,
                dots: false,
                navSpeed: 700,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    740: {
                        items: 1
                    },
                    940: {
                        items: 1
                    }
                },
                nav: false
            });
        }, 300);

        $(window).scroll(function () {
            $('nav').toggleClass('scrolled animated fadeInDown', $(this).scrollTop() > 200);
        });
    }

    toggleNavbar() {

    }
}
