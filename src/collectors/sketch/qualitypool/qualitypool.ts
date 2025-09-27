
import { SketchCollector } from '../../sketchCollector';

export class QualitypoolCollector extends SketchCollector {

    static CONFIG = {
        id: "qualitypool",
        name: "Qualitypool",
        description: "i18n.collectors.qualitypool.description",
        version: "0",
        website: "https://extranet.asc-online.de/intern/Postkorb/Lieferung/B1A38EDB-45CB-4D7E-826D-AAF2CE8B8183",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1739892.jpg",
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
        entryUrl: "https://extranet.asc-online.de/intern/Postkorb/Lieferung/B1A38EDB-45CB-4D7E-826D-AAF2CE8B8183",
    }

    constructor() {
        super(QualitypoolCollector.CONFIG);
    }
}
