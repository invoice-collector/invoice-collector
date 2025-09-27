
import { SketchCollector } from '../../sketchCollector';

export class SoundtaxiCollector extends SketchCollector {

    static CONFIG = {
        id: "soundtaxi",
        name: "soundtaxi",
        description: "i18n.collectors.soundtaxi.description",
        version: "0",
        website: "https://www.soundtaxi.net/login.php?language=de&action=process",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9751.jpg",
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
        entryUrl: "https://www.soundtaxi.net/login.php?language=de&action=process",
    }

    constructor() {
        super(SoundtaxiCollector.CONFIG);
    }
}
