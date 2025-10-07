
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImportfromwebNodatanobusinessComCollector extends SketchCollector {

    static CONFIG = {
        id: "importfromweb_nodatanobusiness_com",
        name: "Importfromweb - nodatanobusiness.com",
        description: "i18n.collectors.importfromweb_nodatanobusiness_com.description",
        version: "0",
        website: "https://dashboard.nodatanobusiness.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206990.jpg",
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
        entryUrl: "https://dashboard.nodatanobusiness.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImportfromwebNodatanobusinessComCollector.CONFIG);
    }
}
