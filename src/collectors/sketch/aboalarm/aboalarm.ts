
import { SketchCollector } from '../../sketchCollector';

export class AboalarmCollector extends SketchCollector {

    static CONFIG = {
        id: "aboalarm",
        name: "Aboalarm",
        description: "i18n.collectors.aboalarm.description",
        version: "0",
        website: "https://www.aboalarm.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31842.jpg",
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
        entryUrl: "https://www.aboalarm.de/",
    }

    constructor() {
        super(AboalarmCollector.CONFIG);
    }
}
