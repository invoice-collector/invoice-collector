
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KuponaMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "kupona_media",
        name: "Kupona Media",
        description: "i18n.collectors.kupona_media.description",
        version: "0",
        website: "https://aff.kpsys.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862781.jpg",
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
        loginUrl: "https://aff.kpsys.de/auszahlungen.cgi",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KuponaMediaCollector.CONFIG);
    }
}
