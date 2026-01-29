
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DbEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "db_energie",
        name: "DB Energie",
        description: "i18n.collectors.db_energie.description",
        version: "0",
        website: "https://dbenergie.sps-ocs.de/Document/Documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723346.jpg",
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
        loginUrl: "https://dbenergie.sps-ocs.de/Document/Documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DbEnergieCollector.CONFIG);
    }
}
