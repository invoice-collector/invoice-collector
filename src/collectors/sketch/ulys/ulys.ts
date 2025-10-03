
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UlysCollector extends SketchCollector {

    static CONFIG = {
        id: "ulys",
        name: "ULYS",
        description: "i18n.collectors.ulys.description",
        version: "0",
        website: "https://espaceabonnes.vinci-autoroutes.com/invoices-consos/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230271.jpg",
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
        entryUrl: "https://espaceabonnes.vinci-autoroutes.com/invoices-consos/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UlysCollector.CONFIG);
    }
}
