
import { SketchCollector } from '../../sketchCollector';

export class NewfoundlandPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "newfoundland_power",
        name: "Newfoundland Power",
        description: "i18n.collectors.newfoundland_power.description",
        version: "0",
        website: "http://www.newfoundlandpower.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9037.jpg",
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
        entryUrl: "http://www.newfoundlandpower.com",
    }

    constructor() {
        super(NewfoundlandPowerCollector.CONFIG);
    }
}
