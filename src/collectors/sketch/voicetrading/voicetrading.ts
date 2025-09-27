
import { SketchCollector } from '../../sketchCollector';

export class VoicetradingCollector extends SketchCollector {

    static CONFIG = {
        id: "voicetrading",
        name: "Voicetrading",
        description: "i18n.collectors.voicetrading.description",
        version: "0",
        website: "https://www.voicetrading.com/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/390112.jpg",
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
        entryUrl: "https://www.voicetrading.com/purchases",
    }

    constructor() {
        super(VoicetradingCollector.CONFIG);
    }
}
