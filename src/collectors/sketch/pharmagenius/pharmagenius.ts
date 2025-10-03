
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PharmageniusCollector extends SketchCollector {

    static CONFIG = {
        id: "pharmagenius",
        name: "Pharmagenius",
        description: "i18n.collectors.pharmagenius.description",
        version: "0",
        website: "https://www.pharmagenius.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/508998.jpg",
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
        entryUrl: "https://www.pharmagenius.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PharmageniusCollector.CONFIG);
    }
}
