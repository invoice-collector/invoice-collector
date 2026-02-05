
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAonHewittRelevesMensuelsCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_aon_hewitt_releves_mensuels",
        name: "Mutuelle AON Hewitt (Releves mensuels)",
        description: "i18n.collectors.mutuelle_aon_hewitt_releves_mensuels.description",
        version: "0",
        website: "https://www.aon.com/human-capital-consulting/default.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125698.jpg",
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
        loginUrl: "https://www.aon.com/human-capital-consulting/default.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleAonHewittRelevesMensuelsCollector.CONFIG);
    }
}
