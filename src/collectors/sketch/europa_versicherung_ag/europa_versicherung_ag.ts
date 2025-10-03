
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EuropaVersicherungAgCollector extends SketchCollector {

    static CONFIG = {
        id: "europa_versicherung_ag",
        name: "EUROPA Versicherung AG",
        description: "i18n.collectors.europa_versicherung_ag.description",
        version: "0",
        website: "http://www.europa-go.de/service/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78769.jpg",
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
        entryUrl: "http://www.europa-go.de/service/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuropaVersicherungAgCollector.CONFIG);
    }
}
