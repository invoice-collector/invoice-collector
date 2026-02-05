
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BrunataMetronaCollector extends SketchCollector {

    static CONFIG = {
        id: "brunata_metrona",
        name: "Brunata Metrona",
        description: "i18n.collectors.brunata_metrona.description",
        version: "0",
        website: "https://portal.brunata-muenchen.de/Dienste?UHJvcGVydHlNYW5hZ2VtZW50SUQ9JzEwMDAxNTE5OTMn#Shell-home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367612.jpg",
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
        loginUrl: "https://portal.brunata-muenchen.de/Dienste?UHJvcGVydHlNYW5hZ2VtZW50SUQ9JzEwMDAxNTE5OTMn#Shell-home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BrunataMetronaCollector.CONFIG);
    }
}
