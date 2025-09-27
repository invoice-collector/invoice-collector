
import { SketchCollector } from '../../sketchCollector';

export class ParqetCollector extends SketchCollector {

    static CONFIG = {
        id: "parqet",
        name: "Parqet",
        description: "i18n.collectors.parqet.description",
        version: "0",
        website: "https://checkout.parqet.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920102.jpg",
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
        entryUrl: "https://checkout.parqet.com",
    }

    constructor() {
        super(ParqetCollector.CONFIG);
    }
}
