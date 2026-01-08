
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TobitSoftwarePartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "tobit_software_partners",
        name: "Tobit Software - Partners",
        description: "i18n.collectors.tobit_software_partners.description",
        version: "0",
        website: "https://de.tobit.software/team",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25012.jpg",
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
        loginUrl: "https://de.tobit.software/team",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TobitSoftwarePartnersCollector.CONFIG);
    }
}
