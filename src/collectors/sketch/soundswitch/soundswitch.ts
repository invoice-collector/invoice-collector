
import { SketchCollector } from '../../sketchCollector';

export class SoundswitchCollector extends SketchCollector {

    static CONFIG = {
        id: "soundswitch",
        name: "SoundSwitch",
        description: "i18n.collectors.soundswitch.description",
        version: "0",
        website: "https://soundswitch.scaledcommerce.com/dashboard/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2557067.jpg",
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
        entryUrl: "https://soundswitch.scaledcommerce.com/dashboard/billing-history",
    }

    constructor() {
        super(SoundswitchCollector.CONFIG);
    }
}
