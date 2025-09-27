
import { SketchCollector } from '../../sketchCollector';

export class PortokasseDeutschePostCollector extends SketchCollector {

    static CONFIG = {
        id: "portokasse_deutsche_post",
        name: "Portokasse Deutsche Post",
        description: "i18n.collectors.portokasse_deutsche_post.description",
        version: "0",
        website: "https://portokasse.deutschepost.de/portokasse/#!/journal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/743794.jpg",
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
        entryUrl: "https://portokasse.deutschepost.de/portokasse/#!/journal",
    }

    constructor() {
        super(PortokasseDeutschePostCollector.CONFIG);
    }
}
