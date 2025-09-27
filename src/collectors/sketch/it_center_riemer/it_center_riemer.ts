
import { SketchCollector } from '../../sketchCollector';

export class ItCenterRiemerCollector extends SketchCollector {

    static CONFIG = {
        id: "it_center_riemer",
        name: "IT-Center Riemer",
        description: "i18n.collectors.it_center_riemer.description",
        version: "0",
        website: "m.holz@itc-riemer.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128488.jpg",
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
        entryUrl: "m.holz@itc-riemer.de",
    }

    constructor() {
        super(ItCenterRiemerCollector.CONFIG);
    }
}
