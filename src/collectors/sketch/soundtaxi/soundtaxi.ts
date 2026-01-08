
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SoundtaxiCollector extends SketchCollector {

    static CONFIG = {
        id: "soundtaxi",
        name: "soundtaxi",
        description: "i18n.collectors.soundtaxi.description",
        version: "0",
        website: "https://www.soundtaxi.net/login.php?language=de&action=process",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9751.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://www.soundtaxi.net/login.php?language=de&action=process",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SoundtaxiCollector.CONFIG);
    }
}
