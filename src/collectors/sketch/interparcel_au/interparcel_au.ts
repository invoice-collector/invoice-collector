
import { SketchCollector } from '../../sketchCollector';

export class InterparcelAuCollector extends SketchCollector {

    static CONFIG = {
        id: "interparcel_au",
        name: "Interparcel AU",
        description: "i18n.collectors.interparcel_au.description",
        version: "0",
        website: "https://au.interparcel.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748696.jpg",
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
        entryUrl: "https://au.interparcel.com/",
    }

    constructor() {
        super(InterparcelAuCollector.CONFIG);
    }
}
