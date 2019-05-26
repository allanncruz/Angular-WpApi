import {Component, OnInit} from '@angular/core';

declare var $;

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    menuItems: any[] = [];

    constructor() {
        this.menuItems = [
            {
                href: '#empresa',
                name: 'A Empresa',
                isActive: true
            },
            {
                href: '#servicos',
                name: 'Serviços',
                isActive: false
            },
            {
                href: '#novidades',
                name: 'Novidades',
                isActive: false
            },
            {
                href: '#parceiros',
                name: 'Parceiros',
                isActive: false
            },
            {
                href: '#contato',
                name: 'Contato',
                isActive: false
            }
        ];
    }

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

    onMenuItemClick(itemPosition) {
        this.menuItems.map((item) => {
            item.isActive = false;
        });
        this.menuItems[itemPosition].isActive = true;
    }
}
