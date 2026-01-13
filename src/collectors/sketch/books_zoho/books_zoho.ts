
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BooksZohoCollector extends SketchCollector {

    static CONFIG = {
        id: "books_zoho",
        name: "Books Zoho",
        description: "i18n.collectors.books_zoho.description",
        version: "0",
        website: "https://books.zoho.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1287709.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://books.zoho.eu",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BooksZohoCollector.CONFIG);
    }
}
