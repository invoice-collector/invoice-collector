
import { SketchCollector } from '../../sketchCollector';

export class SarsZaCollector extends SketchCollector {

    static CONFIG = {
        id: "sars_za",
        name: "SARS  ZA",
        description: "i18n.collectors.sars_za.description",
        version: "0",
        website: "https://www.sarsefiling.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748582.jpg",
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
        entryUrl: "https://www.sarsefiling.co.za/",
    }

    constructor() {
        super(SarsZaCollector.CONFIG);
    }
}
