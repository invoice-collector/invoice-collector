
import { SketchCollector } from '../../sketchCollector';

export class OttoversandAtCollector extends SketchCollector {

    static CONFIG = {
        id: "ottoversand_at",
        name: "ottoversand.at",
        description: "i18n.collectors.ottoversand_at.description",
        version: "0",
        website: "https://www.ottoversand.at/mein-konto/uebersicht/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73920.jpg",
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
        entryUrl: "https://www.ottoversand.at/mein-konto/uebersicht/",
    }

    constructor() {
        super(OttoversandAtCollector.CONFIG);
    }
}
