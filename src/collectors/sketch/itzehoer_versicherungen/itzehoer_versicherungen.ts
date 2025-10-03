
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ItzehoerVersicherungenCollector extends SketchCollector {

    static CONFIG = {
        id: "itzehoer_versicherungen",
        name: "Itzehoer Versicherungen",
        description: "i18n.collectors.itzehoer_versicherungen.description",
        version: "0",
        website: "https://portal.itzehoer.de/pages/user/documentslist/documents-list.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/543151.jpg",
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
        entryUrl: "https://portal.itzehoer.de/pages/user/documentslist/documents-list.xhtml",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ItzehoerVersicherungenCollector.CONFIG);
    }
}
