
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SonyMusicArtistportalCollector extends SketchCollector {

    static CONFIG = {
        id: "sony_music_artistportal",
        name: "Sony Music / Artistportal",
        description: "i18n.collectors.sony_music_artistportal.description",
        version: "0",
        website: "https://sme-artistportal.com/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863067.jpg",
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
        loginUrl: "https://sme-artistportal.com/#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SonyMusicArtistportalCollector.CONFIG);
    }
}
