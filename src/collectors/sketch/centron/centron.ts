
import { SketchCollector } from '../../sketchCollector';

export class CentronCollector extends SketchCollector {

    static CONFIG = {
        id: "centron",
        name: "Centron",
        description: "i18n.collectors.centron.description",
        version: "0",
        website: "https://ccenter.internet1.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49983.jpg",
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
        entryUrl: "https://ccenter.internet1.de/login",
    }

    constructor() {
        super(CentronCollector.CONFIG);
    }
}
