
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IdMacifCollector extends SketchCollector {

    static CONFIG = {
        id: "id_macif",
        name: "ID Macif",
        description: "i18n.collectors.id_macif.description",
        version: "0",
        website: "https://www.macif.fr/assurance/particuliers/vos-espaces-macif",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105875.jpg",
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
        loginUrl: "https://www.macif.fr/assurance/particuliers/vos-espaces-macif",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdMacifCollector.CONFIG);
    }
}
