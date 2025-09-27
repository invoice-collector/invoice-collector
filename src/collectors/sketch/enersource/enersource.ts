
import { SketchCollector } from '../../sketchCollector';

export class EnersourceCollector extends SketchCollector {

    static CONFIG = {
        id: "enersource",
        name: "Enersource",
        description: "i18n.collectors.enersource.description",
        version: "0",
        website: "https://secure6.i-doxs.net/Enersource/Secure/Bills.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20987.jpg",
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
        entryUrl: "https://secure6.i-doxs.net/Enersource/Secure/Bills.aspx",
    }

    constructor() {
        super(EnersourceCollector.CONFIG);
    }
}
