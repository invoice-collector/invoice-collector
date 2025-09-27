
import { SketchCollector } from '../../sketchCollector';

export class CapterraCollector extends SketchCollector {

    static CONFIG = {
        id: "capterra",
        name: "Capterra",
        description: "i18n.collectors.capterra.description",
        version: "0",
        website: "https://www.capterra.com/vp/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/319.jpg",
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
        entryUrl: "https://www.capterra.com/vp/login",
    }

    constructor() {
        super(CapterraCollector.CONFIG);
    }
}
