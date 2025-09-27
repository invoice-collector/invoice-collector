
import { SketchCollector } from '../../sketchCollector';

export class FloridaPublicUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "florida_public_utilities",
        name: "Florida Public Utilities",
        description: "i18n.collectors.florida_public_utilities.description",
        version: "0",
        website: "https://secure8.i-doxs.net/Florida/Secure/Bills.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723583.jpg",
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
        entryUrl: "https://secure8.i-doxs.net/Florida/Secure/Bills.aspx",
    }

    constructor() {
        super(FloridaPublicUtilitiesCollector.CONFIG);
    }
}
