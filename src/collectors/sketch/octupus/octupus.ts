
import { SketchCollector } from '../../sketchCollector';

export class OctupusCollector extends SketchCollector {

    static CONFIG = {
        id: "octupus",
        name: "octupus",
        description: "i18n.collectors.octupus.description",
        version: "0",
        website: "https://octopus.do/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1902240.jpg",
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
        entryUrl: "https://octopus.do/subscription",
    }

    constructor() {
        super(OctupusCollector.CONFIG);
    }
}
