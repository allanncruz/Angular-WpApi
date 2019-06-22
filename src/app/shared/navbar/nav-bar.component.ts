import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

declare var $;

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    menuItems: any[] = [];

    currentUrl: string;

    constructor(private router: Router) {

        this.currentUrl = "";
    }

    toggleLink(route: string, isSubMenu: boolean) {
        $('#navbarSupportedContent').removeClass('show');
        if (isSubMenu) {
            this.flagSubMenu = !this.flagSubMenu;
        }
        this.router.navigate([route]);
    }
    flagSubMenu = true;



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

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl = this.router.url.split('/').pop();
                console.log('this.currentUrl', this.currentUrl);
            }
        });
    }

    toggleNavbar() {

    }
}
