
import { SketchCollector } from '../../sketchCollector';

export class GeneralAnzeigerCollector extends SketchCollector {

    static CONFIG = {
        id: "general_anzeiger",
        name: "General-Anzeiger",
        description: "i18n.collectors.general_anzeiger.description",
        version: "0",
        website: "https://id.ga.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571806.jpg",
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
        entryUrl: "https://id.ga.de/login",
    }

    constructor() {
        super(GeneralAnzeigerCollector.CONFIG);
    }
}
