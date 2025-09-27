
import { SketchCollector } from '../../sketchCollector';

export class HeptabaseCollector extends SketchCollector {

    static CONFIG = {
        id: "heptabase",
        name: "Heptabase",
        description: "i18n.collectors.heptabase.description",
        version: "0",
        website: "https://app.heptabase.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985684.jpg",
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
        entryUrl: "https://app.heptabase.com/",
    }

    constructor() {
        super(HeptabaseCollector.CONFIG);
    }
}
