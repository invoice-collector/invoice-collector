
import { SketchCollector } from '../../sketchCollector';

export class NicsellCollector extends SketchCollector {

    static CONFIG = {
        id: "nicsell",
        name: "nicsell",
        description: "i18n.collectors.nicsell.description",
        version: "0",
        website: "https://nicsell.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52187.jpg",
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
        entryUrl: "https://nicsell.com/en/login",
    }

    constructor() {
        super(NicsellCollector.CONFIG);
    }
}
