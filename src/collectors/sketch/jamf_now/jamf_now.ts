
import { SketchCollector } from '../../sketchCollector';

export class JamfNowCollector extends SketchCollector {

    static CONFIG = {
        id: "jamf_now",
        name: "jamf Now",
        description: "i18n.collectors.jamf_now.description",
        version: "0",
        website: "https://now.jamfcloud.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65208.jpg",
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
        entryUrl: "https://now.jamfcloud.com/payments",
    }

    constructor() {
        super(JamfNowCollector.CONFIG);
    }
}
