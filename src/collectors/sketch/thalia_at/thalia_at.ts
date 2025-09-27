
import { SketchCollector } from '../../sketchCollector';

export class ThaliaAtCollector extends SketchCollector {

    static CONFIG = {
        id: "thalia_at",
        name: "Thalia.at",
        description: "i18n.collectors.thalia_at.description",
        version: "0",
        website: "https://www.thalia.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71193.jpg",
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
        entryUrl: "https://www.thalia.at/",
    }

    constructor() {
        super(ThaliaAtCollector.CONFIG);
    }
}
