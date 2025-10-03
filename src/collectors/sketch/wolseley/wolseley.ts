
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WolseleyCollector extends SketchCollector {

    static CONFIG = {
        id: "wolseley",
        name: "Wolseley",
        description: "i18n.collectors.wolseley.description",
        version: "0",
        website: "https://www.wolseley.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222788.jpg",
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
        entryUrl: "https://www.wolseley.co.uk/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WolseleyCollector.CONFIG);
    }
}
