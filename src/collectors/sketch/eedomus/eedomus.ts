
import { SketchCollector } from '../../sketchCollector';

export class EedomusCollector extends SketchCollector {

    static CONFIG = {
        id: "eedomus",
        name: "Eedomus",
        description: "i18n.collectors.eedomus.description",
        version: "0",
        website: "https://www.eedomus.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118709.jpg",
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
        entryUrl: "https://www.eedomus.com/en/",
    }

    constructor() {
        super(EedomusCollector.CONFIG);
    }
}
