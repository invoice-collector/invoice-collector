
import { SketchCollector } from '../../sketchCollector';

export class AudiohubCollector extends SketchCollector {

    static CONFIG = {
        id: "audiohub",
        name: "audiohub",
        description: "i18n.collectors.audiohub.description",
        version: "0",
        website: "https://audiohub.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819489.jpg",
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
        entryUrl: "https://audiohub.de/",
    }

    constructor() {
        super(AudiohubCollector.CONFIG);
    }
}
