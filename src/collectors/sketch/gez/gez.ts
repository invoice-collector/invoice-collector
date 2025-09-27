
import { SketchCollector } from '../../sketchCollector';

export class GezCollector extends SketchCollector {

    static CONFIG = {
        id: "gez",
        name: "GEZ",
        description: "i18n.collectors.gez.description",
        version: "0",
        website: "https://portal.rundfunkbeitrag.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/857983.jpg",
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
        entryUrl: "https://portal.rundfunkbeitrag.de/",
    }

    constructor() {
        super(GezCollector.CONFIG);
    }
}
