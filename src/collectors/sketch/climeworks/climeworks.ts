
import { SketchCollector } from '../../sketchCollector';

export class ClimeworksCollector extends SketchCollector {

    static CONFIG = {
        id: "climeworks",
        name: "climeworks",
        description: "i18n.collectors.climeworks.description",
        version: "0",
        website: "https://climeworks.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973500.jpg",
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
        entryUrl: "https://climeworks.com/dashboard",
    }

    constructor() {
        super(ClimeworksCollector.CONFIG);
    }
}
