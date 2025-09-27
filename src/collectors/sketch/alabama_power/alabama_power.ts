
import { SketchCollector } from '../../sketchCollector';

export class AlabamaPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "alabama_power",
        name: "Alabama Power",
        description: "i18n.collectors.alabama_power.description",
        version: "0",
        website: "http://www.alabamapower.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8910.jpg",
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
        entryUrl: "http://www.alabamapower.com",
    }

    constructor() {
        super(AlabamaPowerCollector.CONFIG);
    }
}
