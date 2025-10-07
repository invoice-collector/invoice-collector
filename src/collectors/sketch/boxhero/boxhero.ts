
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BoxheroCollector extends SketchCollector {

    static CONFIG = {
        id: "boxhero",
        name: "BoxHero",
        description: "i18n.collectors.boxhero.description",
        version: "0",
        website: "https://www.boxhero.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185038.jpg",
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
        entryUrl: "https://www.boxhero.io",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BoxheroCollector.CONFIG);
    }
}
