
import { SketchCollector } from '../../sketchCollector';

export class TotalenergiesDocOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "totalenergies_doc_online",
        name: "TotalEnergies doc-online",
        description: "i18n.collectors.totalenergies_doc_online.description",
        version: "0",
        website: "https://doc-online.totalenergies.com/private/totalenergies-marketing-deutschland/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1417927.jpg",
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
        entryUrl: "https://doc-online.totalenergies.com/private/totalenergies-marketing-deutschland/documents",
    }

    constructor() {
        super(TotalenergiesDocOnlineCollector.CONFIG);
    }
}
