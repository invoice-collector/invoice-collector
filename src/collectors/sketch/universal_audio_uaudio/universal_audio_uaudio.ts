
import { SketchCollector } from '../../sketchCollector';

export class UniversalAudioUaudioCollector extends SketchCollector {

    static CONFIG = {
        id: "universal_audio_uaudio",
        name: "Universal Audio uaudio",
        description: "i18n.collectors.universal_audio_uaudio.description",
        version: "0",
        website: "https://www.uaudio.de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88487.jpg",
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
        entryUrl: "https://www.uaudio.de/sales/order/history/",
    }

    constructor() {
        super(UniversalAudioUaudioCollector.CONFIG);
    }
}
