
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwisslifeWebofficeCollector extends SketchCollector {

    static CONFIG = {
        id: "swisslife_weboffice",
        name: "Swisslife - Weboffice",
        description: "i18n.collectors.swisslife_weboffice.description",
        version: "0",
        website: "https://www.swisslife-weboffice.de/einfogpweb/posteingang.faces",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104149.jpg",
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
        loginUrl: "https://www.swisslife-weboffice.de/einfogpweb/posteingang.faces",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SwisslifeWebofficeCollector.CONFIG);
    }
}
