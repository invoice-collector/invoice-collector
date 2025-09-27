
import { SketchCollector } from '../../sketchCollector';

export class SoundwiseCollector extends SketchCollector {

    static CONFIG = {
        id: "soundwise",
        name: "Soundwise",
        description: "i18n.collectors.soundwise.description",
        version: "0",
        website: "https://app.mysoundwise.com/dashboard/publisher/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316255.jpg",
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
        entryUrl: "https://app.mysoundwise.com/dashboard/publisher/account",
    }

    constructor() {
        super(SoundwiseCollector.CONFIG);
    }
}
