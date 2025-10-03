
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DmDrogerieMarktCollector extends SketchCollector {

    static CONFIG = {
        id: "dm_drogerie_markt",
        name: "dm-drogerie markt",
        description: "i18n.collectors.dm_drogerie_markt.description",
        version: "0",
        website: "https://www.dm.de/meindmkonto/bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30456.jpg",
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
        entryUrl: "https://www.dm.de/meindmkonto/bestellungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DmDrogerieMarktCollector.CONFIG);
    }
}
