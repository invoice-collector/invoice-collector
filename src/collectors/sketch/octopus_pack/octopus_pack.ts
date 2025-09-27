
import { SketchCollector } from '../../sketchCollector';

export class OctopusPackCollector extends SketchCollector {

    static CONFIG = {
        id: "octopus_pack",
        name: "Octopus Pack",
        description: "i18n.collectors.octopus_pack.description",
        version: "0",
        website: "https://www.octopus-pack.de/checkout/confirm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522389.jpg",
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
        entryUrl: "https://www.octopus-pack.de/checkout/confirm",
    }

    constructor() {
        super(OctopusPackCollector.CONFIG);
    }
}
