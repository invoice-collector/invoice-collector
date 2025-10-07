
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MalakoffMedericRetraiteCollector extends SketchCollector {

    static CONFIG = {
        id: "malakoff_mederic_retraite",
        name: "Malakoff Mederic - Retraite",
        description: "i18n.collectors.malakoff_mederic_retraite.description",
        version: "0",
        website: "https://extranet.malakoffmederic.com/espaceClient/LogonAccess.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107152.jpg",
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
        entryUrl: "https://extranet.malakoffmederic.com/espaceClient/LogonAccess.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MalakoffMedericRetraiteCollector.CONFIG);
    }
}
