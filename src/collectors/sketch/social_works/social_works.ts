
import { SketchCollector } from '../../sketchCollector';

export class SocialWorksCollector extends SketchCollector {

    static CONFIG = {
        id: "social_works",
        name: "Social Works",
        description: "i18n.collectors.social_works.description",
        version: "0",
        website: "https://techfusion.azurewebsites.net/Invoices/List#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59408.jpg",
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
        entryUrl: "https://techfusion.azurewebsites.net/Invoices/List#",
    }

    constructor() {
        super(SocialWorksCollector.CONFIG);
    }
}
