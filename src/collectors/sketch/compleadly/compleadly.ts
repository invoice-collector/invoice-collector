
import { SketchCollector } from '../../sketchCollector';

export class CompleadlyCollector extends SketchCollector {

    static CONFIG = {
        id: "compleadly",
        name: "CompLeadly",
        description: "i18n.collectors.compleadly.description",
        version: "0",
        website: "https://compleadly.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/803049.jpg",
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
        entryUrl: "https://compleadly.de/",
    }

    constructor() {
        super(CompleadlyCollector.CONFIG);
    }
}
