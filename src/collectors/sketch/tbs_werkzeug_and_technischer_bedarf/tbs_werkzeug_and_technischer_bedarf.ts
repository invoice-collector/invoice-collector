
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TbsWerkzeugAndTechnischerBedarfCollector extends SketchCollector {

    static CONFIG = {
        id: "tbs_werkzeug_and_technischer_bedarf",
        name: "TBS Werkzeug & Technischer Bedarf",
        description: "i18n.collectors.tbs_werkzeug_and_technischer_bedarf.description",
        version: "0",
        website: "https://www.tbs-online.de/de/de/Anmelden-Abmelden/Anmelden.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/166275.jpg",
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
        entryUrl: "https://www.tbs-online.de/de/de/Anmelden-Abmelden/Anmelden.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TbsWerkzeugAndTechnischerBedarfCollector.CONFIG);
    }
}
