
import { SketchCollector } from '../../sketchCollector';

export class InternetnordCollector extends SketchCollector {

    static CONFIG = {
        id: "internetnord",
        name: "InternetNord",
        description: "i18n.collectors.internetnord.description",
        version: "0",
        website: "https://subscriptions.zoho.eu/portal/internetnord/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955929.jpg",
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
        entryUrl: "https://subscriptions.zoho.eu/portal/internetnord/login",
    }

    constructor() {
        super(InternetnordCollector.CONFIG);
    }
}
