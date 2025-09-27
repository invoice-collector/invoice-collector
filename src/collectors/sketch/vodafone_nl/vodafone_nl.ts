
import { SketchCollector } from '../../sketchCollector';

export class VodafoneNlCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_nl",
        name: "Vodafone.nl",
        description: "i18n.collectors.vodafone_nl.description",
        version: "0",
        website: "https://www.vodafone.nl/my/account/login.shtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8703.jpg",
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
        entryUrl: "https://www.vodafone.nl/my/account/login.shtml",
    }

    constructor() {
        super(VodafoneNlCollector.CONFIG);
    }
}
