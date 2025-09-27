
import { SketchCollector } from '../../sketchCollector';

export class SutraCollector extends SketchCollector {

    static CONFIG = {
        id: "sutra",
        name: "Sutra",
        description: "i18n.collectors.sutra.description",
        version: "0",
        website: "https://sutra.co/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761413.jpg",
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
        entryUrl: "https://sutra.co/settings/billing",
    }

    constructor() {
        super(SutraCollector.CONFIG);
    }
}
