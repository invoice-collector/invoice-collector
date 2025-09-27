
import { SketchCollector } from '../../sketchCollector';

export class ViewneoCollector extends SketchCollector {

    static CONFIG = {
        id: "viewneo",
        name: "Viewneo",
        description: "i18n.collectors.viewneo.description",
        version: "0",
        website: "https://cloud.viewneo.com/cms#/dashboard/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203789.jpg",
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
        entryUrl: "https://cloud.viewneo.com/cms#/dashboard/subscription",
    }

    constructor() {
        super(ViewneoCollector.CONFIG);
    }
}
