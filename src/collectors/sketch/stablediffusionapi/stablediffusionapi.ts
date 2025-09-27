
import { SketchCollector } from '../../sketchCollector';

export class StablediffusionapiCollector extends SketchCollector {

    static CONFIG = {
        id: "stablediffusionapi",
        name: "stablediffusionapi",
        description: "i18n.collectors.stablediffusionapi.description",
        version: "0",
        website: "https://stablediffusionapi.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986227.jpg",
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
        entryUrl: "https://stablediffusionapi.com/settings/invoices",
    }

    constructor() {
        super(StablediffusionapiCollector.CONFIG);
    }
}
