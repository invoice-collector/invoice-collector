
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class World4youCollector extends SketchCollector {

    static CONFIG = {
        id: "world4you",
        name: "World4You",
        description: "i18n.collectors.world4you.description",
        version: "0",
        website: "https://my.world4you.com/verrechnung/download/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8728.jpg",
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
        entryUrl: "https://my.world4you.com/verrechnung/download/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(World4youCollector.CONFIG);
    }
}
