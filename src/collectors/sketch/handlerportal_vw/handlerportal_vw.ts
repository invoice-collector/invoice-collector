
import { SketchCollector } from '../../sketchCollector';

export class HandlerportalVwCollector extends SketchCollector {

    static CONFIG = {
        id: "handlerportal_vw",
        name: "Handlerportal VW",
        description: "i18n.collectors.handlerportal_vw.description",
        version: "0",
        website: "https://audi-vw-belegportal.inposia.com/inbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881913.jpg",
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
        entryUrl: "https://audi-vw-belegportal.inposia.com/inbox",
    }

    constructor() {
        super(HandlerportalVwCollector.CONFIG);
    }
}
