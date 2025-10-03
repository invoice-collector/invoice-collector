
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ErgoReiseversicherungVermittlerCollector extends SketchCollector {

    static CONFIG = {
        id: "ergo_reiseversicherung_vermittler",
        name: "ERGO Reiseversicherung  Vermittler",
        description: "i18n.collectors.ergo_reiseversicherung_vermittler.description",
        version: "0",
        website: "https://www.reiseversicherung.de/de/partner/reisebuero/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618786.jpg",
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
        entryUrl: "https://www.reiseversicherung.de/de/partner/reisebuero/index.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErgoReiseversicherungVermittlerCollector.CONFIG);
    }
}
