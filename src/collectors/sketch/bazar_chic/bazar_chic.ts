
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BazarChicCollector extends SketchCollector {

    static CONFIG = {
        id: "bazar_chic",
        name: "Bazar Chic",
        description: "i18n.collectors.bazar_chic.description",
        version: "0",
        website: "http://fr.bazarchic.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115923.jpg",
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
        entryUrl: "http://fr.bazarchic.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BazarChicCollector.CONFIG);
    }
}
