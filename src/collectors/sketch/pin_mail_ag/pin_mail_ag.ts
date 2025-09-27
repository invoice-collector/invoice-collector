
import { SketchCollector } from '../../sketchCollector';

export class PinMailAgCollector extends SketchCollector {

    static CONFIG = {
        id: "pin_mail_ag",
        name: "PIN Mail AG",
        description: "i18n.collectors.pin_mail_ag.description",
        version: "0",
        website: "https://meine.pin-ag.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83640.jpg",
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
        entryUrl: "https://meine.pin-ag.de/login",
    }

    constructor() {
        super(PinMailAgCollector.CONFIG);
    }
}
