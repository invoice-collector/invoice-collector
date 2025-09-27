
import { SketchCollector } from '../../sketchCollector';

export class FreeMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "free_mobile",
        name: "Free Mobile",
        description: "i18n.collectors.free_mobile.description",
        version: "0",
        website: "https://mobile.free.fr/moncompte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135353.jpg",
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
        entryUrl: "https://mobile.free.fr/moncompte/",
    }

    constructor() {
        super(FreeMobileCollector.CONFIG);
    }
}
