
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvolutioCollector extends SketchCollector {

    static CONFIG = {
        id: "evolutio",
        name: "evolutio",
        description: "i18n.collectors.evolutio.description",
        version: "0",
        website: "https://my.evolutio.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/788569.jpg",
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
        entryUrl: "https://my.evolutio.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvolutioCollector.CONFIG);
    }
}
