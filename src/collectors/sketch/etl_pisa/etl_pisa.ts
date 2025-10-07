
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EtlPisaCollector extends SketchCollector {

    static CONFIG = {
        id: "etl_pisa",
        name: "ETL Pisa",
        description: "i18n.collectors.etl_pisa.description",
        version: "0",
        website: "https://pisa.etl.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185313.jpg",
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
        entryUrl: "https://pisa.etl.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EtlPisaCollector.CONFIG);
    }
}
