
import { SketchCollector } from '../../sketchCollector';

export class EbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "ebase",
        name: "ebase",
        description: "i18n.collectors.ebase.description",
        version: "0",
        website: "https://portal.ebase.com/(e1)/portal.ebase.com/depot/online-postkorb",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57368.jpg",
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
        entryUrl: "https://portal.ebase.com/(e1)/portal.ebase.com/depot/online-postkorb",
    }

    constructor() {
        super(EbaseCollector.CONFIG);
    }
}
