
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DieBayrischeCollector extends SketchCollector {

    static CONFIG = {
        id: "die_bayrische",
        name: "die Bayrische",
        description: "i18n.collectors.die_bayrische.description",
        version: "0",
        website: "https://www.diebayerische.de/responsiveUI/webmail/readMessage.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986219.jpg",
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
        loginUrl: "https://www.diebayerische.de/responsiveUI/webmail/readMessage.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DieBayrischeCollector.CONFIG);
    }
}
