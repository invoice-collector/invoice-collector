
import { SketchCollector } from '../../sketchCollector';

export class LiftstarCollector extends SketchCollector {

    static CONFIG = {
        id: "liftstar",
        name: "Liftstar",
        description: "i18n.collectors.liftstar.description",
        version: "0",
        website: "https://www.liftstar-partner.de/belegcenter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3034786.jpg",
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
        entryUrl: "https://www.liftstar-partner.de/belegcenter",
    }

    constructor() {
        super(LiftstarCollector.CONFIG);
    }
}
