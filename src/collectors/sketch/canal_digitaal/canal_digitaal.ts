
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CanalDigitaalCollector extends SketchCollector {

    static CONFIG = {
        id: "canal_digitaal",
        name: "Canal Digitaal",
        description: "i18n.collectors.canal_digitaal.description",
        version: "0",
        website: "https://www.canaldigitaal.nl/mijn-canaldigitaal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33131.jpg",
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
        entryUrl: "https://www.canaldigitaal.nl/mijn-canaldigitaal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CanalDigitaalCollector.CONFIG);
    }
}
