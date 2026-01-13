
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MediaMarktSuperSelectCollector extends SketchCollector {

    static CONFIG = {
        id: "media_markt_super_select",
        name: "Media Markt Super Select",
        description: "i18n.collectors.media_markt_super_select.description",
        version: "0",
        website: "https://www.super-select.de/kundencenter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203809.jpg",
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
        loginUrl: "https://www.super-select.de/kundencenter",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MediaMarktSuperSelectCollector.CONFIG);
    }
}
