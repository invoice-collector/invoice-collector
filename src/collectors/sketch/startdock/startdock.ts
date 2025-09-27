
import { SketchCollector } from '../../sketchCollector';

export class StartdockCollector extends SketchCollector {

    static CONFIG = {
        id: "startdock",
        name: "StartDock",
        description: "i18n.collectors.startdock.description",
        version: "0",
        website: "https://community.startdock.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1092468.jpg",
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
        entryUrl: "https://community.startdock.nl/login",
    }

    constructor() {
        super(StartdockCollector.CONFIG);
    }
}
