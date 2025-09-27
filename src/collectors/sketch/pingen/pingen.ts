
import { SketchCollector } from '../../sketchCollector';

export class PingenCollector extends SketchCollector {

    static CONFIG = {
        id: "pingen",
        name: "Pingen",
        description: "i18n.collectors.pingen.description",
        version: "0",
        website: "https://app.pingen.com/organisation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4679883.jpg",
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
        entryUrl: "https://app.pingen.com/organisation",
    }

    constructor() {
        super(PingenCollector.CONFIG);
    }
}
