
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GroupamaContratsCollector extends SketchCollector {

    static CONFIG = {
        id: "groupama_contrats",
        name: "Groupama (contrats)",
        description: "i18n.collectors.groupama_contrats.description",
        version: "0",
        website: "https://www.groupama.fr/coups-de-pouce",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106874.jpg",
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
        loginUrl: "https://www.groupama.fr/coups-de-pouce",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GroupamaContratsCollector.CONFIG);
    }
}
