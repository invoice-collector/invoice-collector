
import { SketchCollector } from '../../sketchCollector';

export class BadenovaCollector extends SketchCollector {

    static CONFIG = {
        id: "badenova",
        name: "badenova",
        description: "i18n.collectors.badenova.description",
        version: "0",
        website: "https://meine-badenova.badenova.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75330.jpg",
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
        entryUrl: "https://meine-badenova.badenova.de/",
    }

    constructor() {
        super(BadenovaCollector.CONFIG);
    }
}
