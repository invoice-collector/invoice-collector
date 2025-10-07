
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KelaKeckAndLangGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "kela_keck_and_lang_gmbh",
        name: "Kela (Keck & Lang GmbH)",
        description: "i18n.collectors.kela_keck_and_lang_gmbh.description",
        version: "0",
        website: "https://b2b.kela.de/html/de/customerDocumentList-customerDocumentListId-invoice.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413899.jpg",
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
        entryUrl: "https://b2b.kela.de/html/de/customerDocumentList-customerDocumentListId-invoice.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KelaKeckAndLangGmbhCollector.CONFIG);
    }
}
