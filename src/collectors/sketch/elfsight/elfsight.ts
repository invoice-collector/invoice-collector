
import { SketchCollector } from '../../sketchCollector';

export class ElfsightCollector extends SketchCollector {

    static CONFIG = {
        id: "elfsight",
        name: "Elfsight",
        description: "i18n.collectors.elfsight.description",
        version: "0",
        website: "https://dash.elfsight.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173708.jpg",
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
        entryUrl: "https://dash.elfsight.com/",
    }

    constructor() {
        super(ElfsightCollector.CONFIG);
    }
}
