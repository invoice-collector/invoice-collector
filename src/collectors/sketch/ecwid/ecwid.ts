
import { SketchCollector } from '../../sketchCollector';

export class EcwidCollector extends SketchCollector {

    static CONFIG = {
        id: "ecwid",
        name: "Ecwid",
        description: "i18n.collectors.ecwid.description",
        version: "0",
        website: "https://my.ecwid.com/store/16217913#orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/146161.jpg",
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
        entryUrl: "https://my.ecwid.com/store/16217913#orders",
    }

    constructor() {
        super(EcwidCollector.CONFIG);
    }
}
