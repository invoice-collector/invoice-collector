
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Century21Collector extends SketchCollector {

    static CONFIG = {
        id: "century_21",
        name: "Century 21",
        description: "i18n.collectors.century_21.description",
        version: "0",
        website: "https://www.orchestrav2.egiweb.net/Works/Docnew.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2012130.jpg",
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
        entryUrl: "https://www.orchestrav2.egiweb.net/Works/Docnew.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Century21Collector.CONFIG);
    }
}
