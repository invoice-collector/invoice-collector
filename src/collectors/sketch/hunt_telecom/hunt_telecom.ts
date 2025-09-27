
import { SketchCollector } from '../../sketchCollector';

export class HuntTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "hunt_telecom",
        name: "Hunt Telecom",
        description: "i18n.collectors.hunt_telecom.description",
        version: "0",
        website: "https://secure.eplustechnologies.com/esalesplus/home_htc.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88517.jpg",
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
        entryUrl: "https://secure.eplustechnologies.com/esalesplus/home_htc.htm",
    }

    constructor() {
        super(HuntTelecomCollector.CONFIG);
    }
}
