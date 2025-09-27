
import { SketchCollector } from '../../sketchCollector';

export class EnwinUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "enwin_utilities",
        name: "Enwin Utilities",
        description: "i18n.collectors.enwin_utilities.description",
        version: "0",
        website: "https://myaccount.enwin.com/CC/Login.xml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9207.jpg",
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
        entryUrl: "https://myaccount.enwin.com/CC/Login.xml",
    }

    constructor() {
        super(EnwinUtilitiesCollector.CONFIG);
    }
}
