
import { SketchCollector } from '../../sketchCollector';

export class NudgifyCollector extends SketchCollector {

    static CONFIG = {
        id: "nudgify",
        name: "Nudgify",
        description: "i18n.collectors.nudgify.description",
        version: "0",
        website: "https://app.nudgify.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1359588.jpg",
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
        entryUrl: "https://app.nudgify.com/",
    }

    constructor() {
        super(NudgifyCollector.CONFIG);
    }
}
