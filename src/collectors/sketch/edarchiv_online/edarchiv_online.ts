
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdarchivOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "edarchiv_online",
        name: "EDarchiv-online",
        description: "i18n.collectors.edarchiv_online.description",
        version: "0",
        website: "https://login.edarchiv.de/recherche/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132495.jpg",
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
        entryUrl: "https://login.edarchiv.de/recherche/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdarchivOnlineCollector.CONFIG);
    }
}
