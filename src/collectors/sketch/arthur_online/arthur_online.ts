
import { SketchCollector } from '../../sketchCollector';

export class ArthurOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "arthur_online",
        name: "Arthur Online",
        description: "i18n.collectors.arthur_online.description",
        version: "0",
        website: "https://system.arthuronline.co.uk/johnwilson/charges/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61367.jpg",
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
        entryUrl: "https://system.arthuronline.co.uk/johnwilson/charges/index",
    }

    constructor() {
        super(ArthurOnlineCollector.CONFIG);
    }
}
