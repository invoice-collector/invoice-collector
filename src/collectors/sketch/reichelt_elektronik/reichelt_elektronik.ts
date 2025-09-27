
import { SketchCollector } from '../../sketchCollector';

export class ReicheltElektronikCollector extends SketchCollector {

    static CONFIG = {
        id: "reichelt_elektronik",
        name: "Reichelt Elektronik",
        description: "i18n.collectors.reichelt_elektronik.description",
        version: "0",
        website: "https://www.reichelt.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37912.jpg",
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
        entryUrl: "https://www.reichelt.de/",
    }

    constructor() {
        super(ReicheltElektronikCollector.CONFIG);
    }
}
