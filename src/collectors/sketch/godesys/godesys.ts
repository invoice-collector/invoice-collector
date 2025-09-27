
import { SketchCollector } from '../../sketchCollector';

export class GodesysCollector extends SketchCollector {

    static CONFIG = {
        id: "godesys",
        name: "godesys",
        description: "i18n.collectors.godesys.description",
        version: "0",
        website: "https://www.godesys.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/559.jpg",
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
        entryUrl: "https://www.godesys.de/",
    }

    constructor() {
        super(GodesysCollector.CONFIG);
    }
}
