
import { SketchCollector } from '../../sketchCollector';

export class AutolampBerlinCollector extends SketchCollector {

    static CONFIG = {
        id: "autolamp_berlin",
        name: "Autolamp Berlin",
        description: "i18n.collectors.autolamp_berlin.description",
        version: "0",
        website: "https://b2b-auto-lamp.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2451920.jpg",
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
        entryUrl: "https://b2b-auto-lamp.net/",
    }

    constructor() {
        super(AutolampBerlinCollector.CONFIG);
    }
}
