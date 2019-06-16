import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../core/api/contact/client.service';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SenderService} from "../../core/api/contact/sender.service";

declare var $;

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    public pageContact: any;
    public contactPosts: any[];
    public isLoading: any;


    public contactForm: FormGroup;

    constructor(private contactService: ContactService,
                private senderService: SenderService,
                private formBuilder: FormBuilder,
                private sanitizer: DomSanitizer) {
        this.isLoading = true;
        this.contactPosts = [];

        this.contactForm = formBuilder.group({
            'nome': [null, Validators.required],
            'telefone': [null, Validators.required],
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'mensagem': [null, Validators.required],
            'tipo_email': ['contato']
        });
    }

    ngOnInit() {
        this.contactService.getPage().then((res: any) => {
            if (res) {
                this.pageContact = res;
                this.pageContact.content.rendered = this.sanitizer.bypassSecurityTrustHtml(this.pageContact.content.rendered);
                this.isLoading = false;
                setTimeout(() => {
                    $('.blocks-gallery-item figure a').attr('rel', 'galeria');
                    $('.blocks-gallery-item figure  a').fancybox();

                }, 100);
            }
        });
    }

    close() {
        $('#popup').hide();
    }

    sendForm() {
        this.senderService.sendContact(this.contactForm.getRawValue())
            .then(res => {
                console.log("chegou!");
                $("#modal-mensagem").modal();
            });
    }
}
