
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BirchCoomunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "birch_coomunications",
        name: "Birch Coomunications",
        description: "i18n.collectors.birch_coomunications.description",
        version: "0",
        website: "https://birchconnect.com/bc/core/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88503.jpg",
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
        entryUrl: "https://birchconnect.com/bc/core/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BirchCoomunicationsCollector.CONFIG);
    }
}
