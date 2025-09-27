
import { SketchCollector } from '../../sketchCollector';

export class MultikurierCollector extends SketchCollector {

    static CONFIG = {
        id: "multikurier",
        name: "Multikurier",
        description: "i18n.collectors.multikurier.description",
        version: "0",
        website: "https://sendos.multikurier.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196254.jpg",
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
        entryUrl: "https://sendos.multikurier.de",
    }

    constructor() {
        super(MultikurierCollector.CONFIG);
    }
}
