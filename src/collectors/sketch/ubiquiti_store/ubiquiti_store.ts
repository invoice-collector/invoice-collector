
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UbiquitiStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "ubiquiti_store",
        name: "Ubiquiti Store",
        description: "i18n.collectors.ubiquiti_store.description",
        version: "0",
        website: "https://eu.store.ui.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/852749.jpg",
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
        entryUrl: "https://eu.store.ui.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UbiquitiStoreCollector.CONFIG);
    }
}
