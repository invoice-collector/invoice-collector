
import { SketchCollector } from '../../sketchCollector';

export class CentralMainePowerCollector extends SketchCollector {

    static CONFIG = {
        id: "central_maine_power",
        name: "Central Maine Power",
        description: "i18n.collectors.central_maine_power.description",
        version: "0",
        website: "http://www.cmpco.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8713.jpg",
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
        entryUrl: "http://www.cmpco.com",
    }

    constructor() {
        super(CentralMainePowerCollector.CONFIG);
    }
}
