
import { SketchCollector } from '../../sketchCollector';

export class AdjustCollector extends SketchCollector {

    static CONFIG = {
        id: "adjust",
        name: "Adjust",
        description: "i18n.collectors.adjust.description",
        version: "0",
        website: "https://dash.adjust.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11347.jpg",
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
        entryUrl: "https://dash.adjust.com/",
    }

    constructor() {
        super(AdjustCollector.CONFIG);
    }
}
