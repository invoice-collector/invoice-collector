
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AbfallwirtschaftPforzheimCollector extends SketchCollector {

    static CONFIG = {
        id: "abfallwirtschaft_pforzheim",
        name: "Abfallwirtschaft Pforzheim",
        description: "i18n.collectors.abfallwirtschaft_pforzheim.description",
        version: "0",
        website: "https://www.abfallwirtschaft-pforzheim.de/kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654452.jpg",
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
        loginUrl: "https://www.abfallwirtschaft-pforzheim.de/kundenportal/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AbfallwirtschaftPforzheimCollector.CONFIG);
    }
}
