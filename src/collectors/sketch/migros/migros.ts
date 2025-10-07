
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MigrosCollector extends SketchCollector {

    static CONFIG = {
        id: "migros",
        name: "Migros",
        description: "i18n.collectors.migros.description",
        version: "0",
        website: "https://www.migros.ch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/149438.jpg",
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
        entryUrl: "https://www.migros.ch",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MigrosCollector.CONFIG);
    }
}
