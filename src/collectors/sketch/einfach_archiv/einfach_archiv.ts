
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EinfachArchivCollector extends SketchCollector {

    static CONFIG = {
        id: "einfach_archiv",
        name: "Einfach Archiv",
        description: "i18n.collectors.einfach_archiv.description",
        version: "0",
        website: "https://www.einfacharchiv.app/kaffeerosterei-elbe455/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1799114.jpg",
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
        loginUrl: "https://www.einfacharchiv.app/kaffeerosterei-elbe455/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EinfachArchivCollector.CONFIG);
    }
}
