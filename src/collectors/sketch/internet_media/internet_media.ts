
import { SketchCollector } from '../../sketchCollector';

export class InternetMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "internet_media",
        name: "Internet Media",
        description: "i18n.collectors.internet_media.description",
        version: "0",
        website: "https://my.internet-media.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3134884.jpg",
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
        entryUrl: "https://my.internet-media.com/invoices",
    }

    constructor() {
        super(InternetMediaCollector.CONFIG);
    }
}
