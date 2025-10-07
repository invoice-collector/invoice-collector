
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SupernovaCollector extends SketchCollector {

    static CONFIG = {
        id: "supernova",
        name: "Supernova",
        description: "i18n.collectors.supernova.description",
        version: "0",
        website: "https://shop.supernova-design.com/my/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771781.jpg",
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
        entryUrl: "https://shop.supernova-design.com/my/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SupernovaCollector.CONFIG);
    }
}
