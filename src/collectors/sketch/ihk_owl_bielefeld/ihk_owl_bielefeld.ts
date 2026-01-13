
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IhkOwlBielefeldCollector extends SketchCollector {

    static CONFIG = {
        id: "ihk_owl_bielefeld",
        name: "IHK OWL-Bielefeld",
        description: "i18n.collectors.ihk_owl_bielefeld.description",
        version: "0",
        website: "https://ihk-postbox.foxdox.de/services/IHK%20Ostwestfalen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778124.jpg",
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
        loginUrl: "https://ihk-postbox.foxdox.de/services/IHK%20Ostwestfalen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IhkOwlBielefeldCollector.CONFIG);
    }
}
