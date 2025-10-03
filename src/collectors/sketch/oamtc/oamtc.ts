
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OamtcCollector extends SketchCollector {

    static CONFIG = {
        id: "oamtc",
        name: "OAMTC",
        description: "i18n.collectors.oamtc.description",
        version: "0",
        website: "https://www.oeamtc.at/mitgliedschaft/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/962400.jpg",
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
        entryUrl: "https://www.oeamtc.at/mitgliedschaft/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OamtcCollector.CONFIG);
    }
}
