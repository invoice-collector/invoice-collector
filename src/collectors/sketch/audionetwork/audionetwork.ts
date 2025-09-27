
import { SketchCollector } from '../../sketchCollector';

export class AudionetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "audionetwork",
        name: "audionetwork",
        description: "i18n.collectors.audionetwork.description",
        version: "0",
        website: "https://www.audionetwork.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45661.jpg",
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
        entryUrl: "https://www.audionetwork.com/login",
    }

    constructor() {
        super(AudionetworkCollector.CONFIG);
    }
}
